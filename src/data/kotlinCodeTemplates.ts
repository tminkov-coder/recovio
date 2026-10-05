/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface KotlinFile {
  name: string;
  path: string;
  code: string;
}

export const KOTLIN_PROJECT_FILES: KotlinFile[] = [
  {
    name: 'MainActivity.kt',
    path: 'app/src/main/java/com/elite/performance/MainActivity.kt',
    code: `package com.elite.performance

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.unit.LayoutDirection
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.elite.performance.ui.theme.EliteTheme
import com.elite.performance.ui.screens.*

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EliteTheme {
                // אכיפת RTL גלובלית עבור עברית כשפת ממשק ראשית
                CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
                    Surface(
                        modifier = Modifier.fillMaxSize(),
                        color = MaterialTheme.colorScheme.background
                    ) {
                        val navController = rememberNavController()
                        
                        NavHost(
                            navController = navController,
                            startDestination = Screen.Splash.route
                        ) {
                            composable(Screen.Splash.route) {
                                SplashScreen(navController = navController)
                            }
                            composable(Screen.Auth.route) {
                                AuthScreen(navController = navController)
                            }
                            composable(Screen.EmailVerification.route) {
                                EmailVerificationScreen(navController = navController)
                            }
                            composable(Screen.MedicalDisclaimer.route) {
                                MedicalDisclaimerScreen(navController = navController)
                            }
                            composable(Screen.Questionnaire.route) {
                                OnboardingQuestionnaireScreen(navController = navController)
                            }
                            composable(Screen.Home.route) {
                                HomeScreen(navController = navController)
                            }
                        }
                    }
                }
            }
        }
    }
}

sealed class Screen(val route: String) {
    object Splash : Screen("splash")
    object Auth : Screen("auth")
    object EmailVerification : Screen("email_verification")
    object MedicalDisclaimer : Screen("medical_disclaimer")
    object Questionnaire : Screen("questionnaire")
    object Home : Screen("home")
}
`
  },
  {
    name: 'SplashScreen.kt',
    path: 'app/src/main/java/com/elite/performance/ui/screens/SplashScreen.kt',
    code: `package com.elite.performance.ui.screens

import androidx.compose.animation.core.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.blur
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.elite.performance.Screen
import kotlinx.coroutines.delay

/**
 * Animated SplashScreen for Recovio Academy.
 * Designed with absolute black background, spring logo entrance, and subsequent neon blue aura pulses.
 */
@Composable
fun SplashScreen(navController: NavController) {
    // Animation state variables
    val logoScale = remember { Animatable(0.1f) }
    val logoAlpha = remember { Animatable(0.0f) }
    val textAlpha = remember { Animatable(0.0f) }
    val screenAlpha = remember { Animatable(1.0f) }
    
    // Electric blue pulse animation state
    val glowScale = remember { Animatable(0.8f) }
    val glowAlpha = remember { Animatable(0.0f) }

    // Start Choreography Timeline
    LaunchedEffect(Unit) {
        // Step 1: Fade-in and scale-up the central logo over 1000ms using a spring overshoot easing
        logoScale.animateTo(
            targetValue = 1.0f,
            animationSpec = spring(
                dampingRatio = 0.58f,  // Gentle spring overshoot
                stiffness = Spring.StiffnessLow
            )
        )
        // Run alpha alongside scale
        logoAlpha.animateTo(
            targetValue = 1.0f,
            animationSpec = tween(durationMillis = 800)
        )

        // Step 2: Immediately fade-in text "Recovio Academy"
        textAlpha.animateTo(
            targetValue = 1.0f,
            animationSpec = tween(durationMillis = 500, easing = LinearOutSlowInEasing)
        )

        // Trigger electric blue background neon aura glow pulse
        glowAlpha.animateTo(
            targetValue = 0.45f,
            animationSpec = tween(durationMillis = 400)
        )
        
        // Loop the glow pulse as an infinite subtle electric heartbeat
        while (true) {
            // Check if still on splash to prevent coroutine leak
            if (screenAlpha.value <= 1.0f) {
                glowScale.animateTo(
                    targetValue = 1.25f,
                    animationSpec = tween(durationMillis = 1100, easing = FastOutSlowInEasing)
                )
                glowAlpha.animateTo(
                    targetValue = 0.15f,
                    animationSpec = tween(durationMillis = 1100, easing = FastOutSlowInEasing)
                )
                glowScale.animateTo(
                    targetValue = 0.95f,
                    animationSpec = tween(durationMillis = 1100, easing = FastOutSlowInEasing)
                )
                glowAlpha.animateTo(
                    targetValue = 0.45f,
                    animationSpec = tween(durationMillis = 1100, easing = FastOutSlowInEasing)
                )
            } else break
        }
    }

    // Timer layout countdown to crossfade navigation transition
    LaunchedEffect(Unit) {
        delay(2500) // Hold duration on screen for intentional visual luxury feel
        
        // Step 3: Seamless Fade-out exit transit
        screenAlpha.animateTo(
            targetValue = 0.0f,
            animationSpec = tween(durationMillis = 500, easing = FastOutLinearInEasing)
        )
        
        // Launch high-contrast login screen and clear splash from stack
        navController.navigate(Screen.Auth.route) {
            popUpTo(Screen.Splash.route) { inclusive = true }
        }
    }

    // Main layout container: Pitch Black
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFF000000)) // Pitch black
            .alpha(screenAlpha.value),
        contentAlignment = Alignment.Center
    ) {
        // Glowing Aura Aura Background component (Electric Blue glow)
        Box(
            modifier = Modifier
                .size(240.dp)
                .scale(glowScale.value)
                .alpha(glowAlpha.value)
                .blur(30.dp)
                .background(
                    brush = Brush.radialGradient(
                        colors = listOf(
                            Color(0xFF007BFF), // Electric Blue
                            Color.Transparent
                        )
                    ),
                    shape = RoundedCornerShape(120.dp)
                )
        )

        // Vertical branding column
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(24.dp)
        ) {
            // Central Logo wrapper with Spring-Animation scale modifier
            Box(
                modifier = Modifier
                    .size(72.dp)
                    .scale(logoScale.value)
                    .alpha(logoAlpha.value)
                    .background(Color.White, RoundedCornerShape(18.dp))
                    .border(2.dp, Color(0xFF007BFF).copy(alpha = 0.6f), RoundedCornerShape(18.dp)),
                contentAlignment = Alignment.Center
            ) {
                // High contrast logo line indicator (ECG/Activity shape)
                Canvas(modifier = Modifier.size(40.dp)) {
                    val pathWidth = size.width
                    val pathHeight = size.height
                    
                    // Simple custom cardiac stroke paths
                    drawLine(
                        color = Color.Black,
                        start = androidx.compose.ui.geometry.Offset(0f, pathHeight * 0.5f),
                        end = androidx.compose.ui.geometry.Offset(pathWidth * 0.3f, pathHeight * 0.5f),
                        strokeWidth = 3.dp.toPx()
                    )
                    drawLine(
                        color = Color.Black,
                        start = androidx.compose.ui.geometry.Offset(pathWidth * 0.3f, pathHeight * 0.5f),
                        end = androidx.compose.ui.geometry.Offset(pathWidth * 0.45f, pathHeight * 0.15f),
                        strokeWidth = 3.dp.toPx()
                    )
                    drawLine(
                        color = Color.Black,
                        start = androidx.compose.ui.geometry.Offset(pathWidth * 0.45f, pathHeight * 0.15f),
                        end = androidx.compose.ui.geometry.Offset(pathWidth * 0.6f, pathHeight * 0.85f),
                        strokeWidth = 3.dp.toPx()
                    )
                    drawLine(
                        color = Color.Black,
                        start = androidx.compose.ui.geometry.Offset(pathWidth * 0.6f, pathHeight * 0.85f),
                        end = androidx.compose.ui.geometry.Offset(pathWidth * 0.72f, pathHeight * 0.5f),
                        strokeWidth = 3.dp.toPx()
                    )
                    drawLine(
                        color = Color.Black,
                        start = androidx.compose.ui.geometry.Offset(pathWidth * 0.72f, pathHeight * 0.5f),
                        end = androidx.compose.ui.geometry.Offset(pathWidth, pathHeight * 0.5f),
                        strokeWidth = 3.dp.toPx()
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            // Sub-sequenced typography group
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.alpha(textAlpha.value)
            ) {
                Text(
                    text = "RECOVIO",
                    color = Color.White,
                    fontSize = 20.sp,
                    fontWeight = FontWeight.ExtraBold,
                    letterSpacing = 4.sp,
                    fontFamily = FontFamily.SansSerif,
                    textAlign = TextAlign.Center
                )
                
                Spacer(modifier = Modifier.height(6.dp))

                Text(
                    text = "ACADEMY",
                    color = Color(0xFF007BFF),
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Black,
                    letterSpacing = 5.sp,
                    fontFamily = FontFamily.Monospace,
                    textAlign = TextAlign.Center
                )
            }
        }
    }
}
`
  },
  {
    name: 'VideoPlayer.kt',
    path: 'app/src/main/java/com/elite/performance/ui/components/VideoPlayer.kt',
    code: `package com.elite.performance.ui.components

import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material3.Icon
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.PlayerView

@Composable
fun VideoPlayer(
    videoUrl: String?,
    videoID: String?,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    var isPlaying by remember { mutableStateOf(false) }
    
    // ExoPlayer Builder Infrastructure
    val exoPlayer = remember {
        ExoPlayer.Builder(context).build().apply {
            // Dynamic video URL loading (Direct MP4, Vimeo, etc.)
            val uriToLoad = when {
                !videoUrl.isNullOrEmpty() -> videoUrl
                !videoID.isNullOrEmpty() -> "https://player.vimeo.com/external/\${videoID}.mp4"
                else -> "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }
            val mediaItem = MediaItem.fromUri(uriToLoad)
            setMediaItem(mediaItem)
            prepare()
        }
    }

    // Release player resources when leaving composable screen
    DisposableEffect(exoPlayer) {
        onDispose {
            exoPlayer.release()
        }
    }

    // Premium 16:9 Aspect Ratio container with rounded 8.dp corners
    Box(
        modifier = modifier
            .fillMaxWidth()
            .aspectRatio(16f / 9f)
            .clip(RoundedCornerShape(8.dp))
            .background(Color.Black),
        contentAlignment = Alignment.Center
    ) {
        if (!isPlaying) {
            // Unloaded Thumbnail Layout with Centered Premium Play Icon Overlay
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color(0xFF0D0D12))
                    .clickable {
                        isPlaying = true
                        exoPlayer.play()
                    },
                contentAlignment = Alignment.Center
            ) {
                // Glow Pulse background ring overlay
                Box(
                    modifier = Modifier
                        .size(56.dp)
                        .background(Color(0xFF0066FF).copy(alpha = 0.15f), RoundedCornerShape(28.dp)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Default.PlayArrow,
                        contentDescription = "נגן וידאו (ExoPlayer)",
                        tint = Color(0xFF0066FF),
                        modifier = Modifier.size(32.dp)
                    )
                }
            }
        } else {
            // Native ExoPlayer/Media3 control frame mapping
            AndroidView(
                factory = { ctx ->
                    PlayerView(ctx).apply {
                        player = exoPlayer
                        useController = true
                        layoutParams = FrameLayout.LayoutParams(
                            ViewGroup.LayoutParams.MATCH_PARENT,
                            ViewGroup.LayoutParams.MATCH_PARENT
                        )
                    }
                },
                modifier = Modifier.fillMaxSize()
            )
        }
    }
}
`
  },
  {
    name: 'AuthScreen.kt',
    path: 'app/src/main/java/com/elite/performance/ui/screens/AuthScreen.kt',
    code: `package com.elite.performance.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.elite.performance.Screen

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AuthScreen(navController: NavController) {
    var isRegisterMode by remember { mutableStateOf(false) }
    var fullName by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var phone by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    
    val emailHasHebrew = email.any { it in 'א'..'ת' }
    val isEmailValid = email.trim().matches(Regex("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$")) && !emailHasHebrew
    val isEmailErrorVisible = isRegisterMode && email.isNotEmpty() && (!isEmailValid || emailHasHebrew)
    
    val isPhoneValid = phone.trim().matches(Regex("^(050|052|053|054|055|058)\\\\d{7}$"))
    val isPhoneErrorVisible = phone.isNotEmpty() && !isPhoneValid

    val fullNameWords = fullName.trim().split(Regex("\\s+"))
    val isFullNameValid = fullNameWords.size >= 2 && fullNameWords.all { it.length >= 2 }
    val isFullNameErrorVisible = isRegisterMode && fullName.isNotEmpty() && !isFullNameValid
    
    var errorText by remember { mutableStateOf<String?>(null) }
    
    val scrollState = rememberScrollState()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
            .padding(24.dp)
            .verticalScroll(scrollState),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        // לוגו קלאס אקדמיה בהייטק
        Text(
            text = "RECOVIO ACADEMY",
            fontSize = 24.sp,
            fontWeight = FontWeight.Black,
            color = Color(0xFF0066FF), // Electric Blue
            letterSpacing = 2.sp,
            textAlign = TextAlign.Center
        )
        
        Text(
            text = if (isRegisterMode) "הרשמה לאקדמיית העלית" else "כניסה לאזור האימונים",
            fontSize = 18.sp,
            color = Color.White,
            modifier = Modifier.padding(top = 8.dp, bottom = 32.dp),
            textAlign = TextAlign.Center
        )

        if (isRegisterMode) {
            // שדה שם מלא
            OutlinedTextField(
                value = fullName,
                onValueChange = { fullName = it },
                label = { Text("שם מלא", color = Color.Gray) },
                isError = isFullNameErrorVisible,
                colors = OutlinedTextFieldDefaults.colors(
                    focusedTextColor = Color.White,
                    unfocusedTextColor = Color.White,
                    focusedBorderColor = if (isFullNameErrorVisible) Color.Red else Color(0xFF0066FF),
                    unfocusedBorderColor = if (isFullNameErrorVisible) Color.Red else Color.DarkGray
                ),
                modifier = Modifier.fillMaxWidth()
            )
            if (isFullNameErrorVisible) {
                Text(
                    text = "נא להזין שם מלא (פרטי ומשפחה)",
                    color = Color.Red,
                    fontSize = 12.sp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(start = 8.dp, bottom = 12.dp),
                    textAlign = TextAlign.Start
                )
            } else {
                Spacer(modifier = Modifier.height(16.dp))
            }
        }

        if (isRegisterMode) {
            // אימייל
            OutlinedTextField(
                value = email,
                onValueChange = { email = it },
                label = { Text("כתובת אימייל", color = Color.Gray) },
                isError = isEmailErrorVisible,
                colors = OutlinedTextFieldDefaults.colors(
                    focusedTextColor = Color.White,
                    unfocusedTextColor = Color.White,
                    focusedBorderColor = if (isEmailErrorVisible) Color.Red else Color(0xFF0066FF),
                    unfocusedBorderColor = if (isEmailErrorVisible) Color.Red else Color.DarkGray
                ),
                modifier = Modifier.fillMaxWidth().padding(bottom = if (isEmailErrorVisible) 4.dp else 16.dp)
            )

            if (isEmailErrorVisible) {
                Text(
                    text = if (emailHasHebrew) "כתובת אימייל חייבת להיות באנגלית בלבד" else "כתובת אימייל לא תקינה",
                    color = Color.Red,
                    fontSize = 12.sp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 12.dp),
                    textAlign = TextAlign.Start
                )
            }
        }

        // טלפון (שם משתמש בכניסה ובהרשמה)
        OutlinedTextField(
            value = phone,
            onValueChange = { phone = it },
            label = { Text(if (isRegisterMode) "מספר טלפון" else "מספר טלפון (שם משתמש)", color = Color.Gray) },
            isError = isPhoneErrorVisible,
            colors = OutlinedTextFieldDefaults.colors(
                focusedTextColor = Color.White,
                unfocusedTextColor = Color.White,
                focusedBorderColor = if (isPhoneErrorVisible) Color.Red else Color(0xFF0066FF),
                unfocusedBorderColor = if (isPhoneErrorVisible) Color.Red else Color.DarkGray
            ),
            modifier = Modifier.fillMaxWidth().padding(bottom = if (isPhoneErrorVisible) 4.dp else 16.dp)
        )

        if (isPhoneErrorVisible) {
            Text(
                text = "נא להזין מספר טלפון נייד תקין",
                color = Color.Red,
                fontSize = 12.sp,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 12.dp),
                textAlign = TextAlign.Start
            )
        }

        // סיסמה משולבת ביומטריה טביעת אצבע (Android Biometrics Callback)
        Row(
            modifier = Modifier.fillMaxWidth().padding(bottom = 24.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            OutlinedTextField(
                value = password,
                onValueChange = { password = it },
                label = { Text("סיסמה", color = Color.Gray) },
                visualTransformation = PasswordVisualTransformation(),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedTextColor = Color.White,
                    unfocusedTextColor = Color.White,
                    focusedBorderColor = Color(0xFF0066FF),
                    unfocusedBorderColor = Color.DarkGray
                ),
                modifier = Modifier.weight(1f)
            )
            if (!isRegisterMode) {
                Spacer(modifier = Modifier.width(8.dp))
                IconButton(
                    onClick = {
                        // הפעלת BiometricPrompt מובנה באנדרואיד
                        // val biometricPrompt = BiometricPrompt(activity, executor, callback)
                        // biometricPrompt.authenticate(promptInfo)
                    },
                    modifier = Modifier
                        .size(56.dp)
                        .background(Color(0xFF111111), RoundedCornerShape(12.dp))
                ) {
                    Icon(
                        imageVector = Icons.Default.Fingerprint,
                        contentDescription = "התחברות ביומטרית",
                        tint = Color(0xFF0066FF)
                    )
                }
            }
        }

        errorText?.let {
            Text(
                text = it,
                color = Color.Red,
                fontSize = 14.sp,
                modifier = Modifier.padding(bottom = 16.dp),
                textAlign = TextAlign.Center
            )
        }

        // כפתור כחול אלקטריק "התחבר" או "הרשם"
        Button(
            onClick = {
                if (isRegisterMode) {
                    if (fullName.trim().isEmpty() || email.trim().isEmpty() || phone.trim().isEmpty() || password.length < 6) {
                        errorText = "נא למלא את כל השדות בצורה תקינה. סיסמה מעל 6 תווים."
                    } else if (!isFullNameValid) {
                        errorText = "נא להזין שם מלא (פרטי ומשפחה)"
                    } else if (emailHasHebrew) {
                        errorText = "כתובת אימייל חייבת להיות באנגלית בלבד"
                    } else if (!isEmailValid) {
                        errorText = "כתובת אימייל לא תקינה"
                    } else {
                        errorText = null
                        navController.navigate(Screen.EmailVerification.route)
                    }
                } else {
                    if (!isPhoneValid || password.length < 6) {
                        errorText = "נא להזין מספר טלפון תקין וסיסמה מעל 6 תווים."
                    } else {
                        errorText = null
                        navController.navigate(Screen.Home.route)
                    }
                }
            },
            enabled = if (isRegisterMode) (isEmailValid && isPhoneValid && isFullNameValid) else (isPhoneValid && password.length >= 6),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF0066FF),
                disabledContainerColor = Color.DarkGray.copy(alpha = 0.5f)
            ),
            modifier = Modifier
                .fillMaxWidth()
                .height(54.dp),
            shape = MaterialTheme.shapes.medium
        ) {
            Text(
                text = if (isRegisterMode) "צור חשבון והתחל להתאמן" else "התחבר",
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
        }

        Spacer(modifier = Modifier.height(24.dp))

        // קישור מעבר מצב להרשמה (Toggle text)
        Text(
            text = if (isRegisterMode) "כבר יש לך חשבון? התחבר כאן" else "נרשם חדש? הרשם עכשיו והתחל להתאמן",
            color = Color(0xFF0066FF),
            fontSize = 14.sp,
            fontWeight = FontWeight.Medium,
            modifier = Modifier
                .clickable {
                    isRegisterMode = !isRegisterMode
                    errorText = null
                }
                .padding(8.dp),
            textAlign = TextAlign.Center
        )
    }
}
`
  },
  {
    name: 'MedicalDisclaimerScreen.kt',
    path: 'app/src/main/java/com/elite/performance/ui/screens/MedicalDisclaimerScreen.kt',
    code: `package com.elite.performance.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.compose.ui.platform.LocalContext
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.elite.performance.Screen

@Composable
fun MedicalDisclaimerScreen(navController: NavController) {
    var isWaiverChecked by remember { mutableStateOf(false) }
    
    // 3 שאלות חובה כן / לא
    var qHeartHealth by remember { mutableStateOf<Boolean?>(null) }
    var qConstraints by remember { mutableStateOf<Boolean?>(null) }
    var qBalance by remember { mutableStateOf<Boolean?>(null) }
    
    var showSafetyFreeze by remember { mutableStateOf(false) }
    var uploadedFileUri by remember { mutableStateOf<Uri?>(null) }
    var isUploading by remember { mutableStateOf(false) }
    var uploadSuccess by remember { mutableStateOf(false) }
    
    var showErrorMsg by remember { mutableStateOf(false) }

    val filePickerLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent()
    ) { uri: Uri? ->
        if (uri != null) {
            uploadedFileUri = uri
            // סימולציה של העלאת קובץ ל-Firebase Cloud Storage
            isUploading = true
            // בעולם האמיתי: StorageReference.putFile(uri).addOnCompleteListener...
            isUploading = false
            uploadSuccess = true
        }
    }

    val scrollState = rememberScrollState()

    if (showSafetyFreeze) {
        // מסך הקפאת גישה מטעמי בטיחות רפואית
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black)
                .padding(24.dp)
                .verticalScroll(scrollState),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = "⚠️ חסם בטיחות רפואי אקטיבי",
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
                color = Color.Red,
                textAlign = TextAlign.Center
            )
            
            Text(
                text = "בשל דיווח על רקע רפואי המצריך בירור, גישתך לאפליקציה הוקפאה באופן זמני לשמירה על בריאותך פיזית.",
                fontSize = 15.sp,
                color = Color.White,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(top = 16.dp, bottom = 32.dp)
            )

            // אופציה א: תיאום בדיקה קלינית בראשל"צ
            Text(
                text = "אופציה 1: תיאום בדיקה פיזית בראשון לציון",
                color = Color.Gray,
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.align(Alignment.Start)
            )
            
            val context = LocalContext.current
            Button(
                onClick = {
                    val rawMsg = "שלום, שמי ספורטאי, הגעתי דרך האפליקציה שלכם Recovio Academy. אני מעוניין לקבוע תור לקליניקה."
                    val encodedMsg = java.net.URLEncoder.encode(rawMsg, "UTF-8")
                    val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://wa.me/972587858708?text=$encodedMsg"))
                    context.startActivity(intent)
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0066FF)),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp, bottom = 24.dp)
                    .height(50.dp)
            ) {
                Text("תיאום בדיקה קלינית אישית בראשל\"צ (וואטסאפ) ✔️", color = Color.White, fontSize = 14.sp)
            }

            // אופציה ב: העלאת אישור רפואי קיים
            Text(
                text = "אופציה 2: העלאת אישור רפואי חתום בתוקף",
                color = Color.Gray,
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.align(Alignment.Start)
            )
            
            Button(
                onClick = { filePickerLauncher.launch("image/*,application/pdf") },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0066FF)),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp, bottom = 12.dp)
                    .height(50.dp)
            ) {
                Text(
                    text = if (uploadedFileUri != null) "קובץ צורף בהצלחה ✔️" else "יש לי אישור רפואי בתוקף (צרף)",
                    color = Color.White
                )
            }

            if (uploadedFileUri != null) {
                Text(
                    text = "שם הקובץ: \${uploadedFileUri?.lastPathSegment}",
                    color = Color.Green,
                    fontSize = 12.sp,
                    modifier = Modifier.padding(bottom = 12.dp)
                )
            }

            // כפתור אישור סופי ופתיחת אפליקציה - פתוח רק אם קובץ הועלה סופית לסטורג'
            Button(
                onClick = {
                    if (uploadSuccess) {
                        // שחרור החשבון ומעבר לשאלון קליטה מהיר
                        navController.navigate(Screen.Questionnaire.route)
                    }
                },
                enabled = uploadSuccess,
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFF00C853),
                    disabledContainerColor = Color.DarkGray.copy(alpha = 0.5f)
                ),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 16.dp)
                    .height(54.dp)
            ) {
                Text("שלח ופתח אפליקציה", color = Color.White, fontSize = 16.sp, fontWeight = FontWeight.Bold)
            }
            
            Spacer(modifier = Modifier.height(24.dp))
            
            Text(
                text = "חזור להצהרה הבריאותית",
                color = Color.Gray,
                fontSize = 13.sp,
                modifier = Modifier
                    .clickable { showSafetyFreeze = false }
                    .padding(8.dp)
            )
        }
    } else {
        // הצהרת בריאות רגילה
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black)
                .padding(24.dp)
                .verticalScroll(scrollState),
            horizontalAlignment = Alignment.Start
        ) {
            Text(
                text = "הצהרת בריאות ותנאי שימוש",
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.padding(bottom = 16.dp)
            )
            
            Text(
                text = "מתאמן/ת יקר/ה, על מנת להתאים לך תוכנית אימון עצימה ולשמור על בטיחות מקסימלית באקדמיה, אנא ענה/י על הצהרת הבריאות המנדטורית הבאה:",
                fontSize = 14.sp,
                color = Color.LightGray,
                modifier = Modifier.padding(bottom = 24.dp),
                textAlign = TextAlign.Start
            )

            // שאלות כן / לא
            MedicalQuestionItem(
                question = "1. האם רופא אמר לך פעם שיש לך בעיית לב כלשהי או לחץ דם חריג?",
                selectedOption = qHeartHealth,
                onSelect = { qHeartHealth = it }
            )

            MedicalQuestionItem(
                question = "2. האם יש לך הגבלות פיזיות, כאבים כרוניים או בעיות מפרקים פעילות המונעים ממך להתאמן?",
                selectedOption = qConstraints,
                onSelect = { qConstraints = it }
            )

            MedicalQuestionItem(
                question = "3. האם איבדת פעם בעקבות סחרחורת שיווי משקל, קוצר נשימה חריף או הכרה?",
                selectedOption = qBalance,
                onSelect = { qBalance = it }
            )

            Spacer(modifier = Modifier.height(16.dp))

            // תיבת אישור
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 12.dp)
            ) {
                Checkbox(
                    checked = isWaiverChecked,
                    onCheckedChange = { isWaiverChecked = it },
                    colors = CheckboxDefaults.colors(
                        checkedColor = Color(0xFF0066FF),
                        uncheckedColor = Color.LightGray
                    )
                )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = "אני מצהיר כי אני בריא פיזית ומסיר אחריות משפטית ממתחם האקדמיה והצוות המשקם",
                    color = Color.White,
                    fontSize = 12.sp,
                    lineHeight = 16.sp
                )
            }

            if (showErrorMsg) {
                Text(
                    text = "נא לענות על כל שאלות החובה ולסמן את תיבת ההסכמה כדי להמשיך.",
                    color = Color.Red,
                    fontSize = 13.sp,
                    modifier = Modifier.padding(vertical = 8.dp)
                )
            }

            Spacer(modifier = Modifier.weight(1f))

            Button(
                onClick = {
                    if (!isWaiverChecked || qHeartHealth == null || qConstraints == null || qBalance == null) {
                        showErrorMsg = true
                    } else {
                        showErrorMsg = false
                        // מנגנון הקפאה: אם תשובה כלשהי היא "כן" (true)
                        if (qHeartHealth == true || qConstraints == true || qBalance == true) {
                            showSafetyFreeze = true
                        } else {
                            navController.navigate(Screen.Questionnaire.route)
                        }
                    }
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0066FF)),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(54.dp)
            ) {
                Text("המשך לשאלון התאמה", fontSize = 16.sp, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun MedicalQuestionItem(
    question: String,
    selectedOption: Boolean?,
    onSelect: (Boolean) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 10.dp)
    ) {
        Text(
            text = question,
            fontSize = 14.sp,
            color = Color.White,
            fontWeight = FontWeight.Medium
        )
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 6.dp)
        ) {
            Button(
                onClick = { onSelect(true) },
                colors = ButtonDefaults.buttonColors(
                    containerColor = if (selectedOption == true) Color(0xFF0066FF) else Color.DarkGray
                ),
                modifier = Modifier
                    .weight(1f)
                    .padding(end = 6.dp)
                    .height(40.dp)
            ) {
                Text("כן", color = Color.White)
            }
            Button(
                onClick = { onSelect(false) },
                colors = ButtonDefaults.buttonColors(
                    containerColor = if (selectedOption == false) Color(0xFF0066FF) else Color.DarkGray
                ),
                modifier = Modifier
                    .weight(1f)
                    .padding(start = 6.dp)
                    .height(40.dp)
            ) {
                Text("לא", color = Color.White)
            }
        }
    }
}
`
  },
  {
    name: 'OnboardingQuestionnaire.kt',
    path: 'app/src/main/java/com/elite/performance/ui/screens/OnboardingQuestionnaire.kt',
    code: `package com.elite.performance.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.elite.performance.Screen
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore

@Composable
fun OnboardingQuestionnaireScreen(navController: NavController) {
    var step by remember { mutableStateOf(1) }
    
    // שמירת הבחירות בשאלון
    var ageGroup by remember { mutableStateOf("") }
    var primarySport by remember { mutableStateOf("") }
    var mainGoal by remember { mutableStateOf("") }
    var painLevel by remember { mutableStateOf("") }
    
    var isSaving by remember { mutableStateOf(false) }

    val db = FirebaseFirestore.getInstance()
    val auth = FirebaseAuth.getInstance()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
            .padding(24.dp),
        horizontalAlignment = Alignment.Start
    ) {
        // מחוון התקדמות (Linear Progress Indicator)
        Text(
            text = "שאלון קליטה מהיר - שלב \${step} מתוך 4",
            fontSize = 14.sp,
            color = Color.Gray,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        
        LinearProgressIndicator(
            progress = { step / 4f },
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = 32.dp),
            color = Color(0xFF0066FF),
            trackColor = Color.DarkGray,
        )

        when (step) {
            1 -> {
                QuestionStep(
                    title = "בחר את קבוצת הגיל שלך:",
                    options = listOf("מתחת ל-18", "18-25", "26-35", "36-45", "46+"),
                    selectedValue = ageGroup,
                    onSelect = {
                        ageGroup = it
                        step = 2
                    }
                )
            }
            2 -> {
                QuestionStep(
                    title = "מהו תת-הספורט המוביל שלך?",
                    options = listOf("⚽ כדורגל", "🥋 ג'יו-ג'יטסו", "🎾 טניס", "🏊 שחייה"),
                    selectedValue = primarySport,
                    onSelect = {
                        primarySport = it
                        step = 3
                    }
                )
            }
            3 -> {
                QuestionStep(
                    title = "מהי מטרת האימונים המרכזית שלך?",
                    options = listOf("שיפור ביצועים", "מניעת פציעות", "שיקום מכאב"),
                    selectedValue = mainGoal,
                    onSelect = {
                        mainGoal = it
                        step = 4
                    }
                )
            }
            4 -> {
                QuestionStep(
                    title = "מהי רמת הכאב הנוכחית שלך במאמץ?",
                    options = listOf("🟢 ללא כאב", "🟡 רגישות קלה", "🔴 כאב משבית"),
                    selectedValue = painLevel,
                    onSelect = {
                        painLevel = it
                        
                        // שמירה סופית ל-Firestore
                        isSaving = true
                        val userId = auth.currentUser?.uid ?: "anonymous_user"
                        val answers = hashMapOf(
                            "ageGroup" to ageGroup,
                            "primarySport" to primarySport,
                            "mainGoal" to mainGoal,
                            "painLevel" to painLevel,
                            "createdAt" to com.google.firebase.Timestamp.now()
                        )
                        
                        db.collection("athletes").document(userId)
                            .set(answers)
                            .addOnSuccessListener {
                                isSaving = false
                                navController.navigate(Screen.Home.route) {
                                    popUpTo(Screen.Auth.route) { inclusive = true }
                                }
                            }
                            .addOnFailureListener {
                                isSaving = false
                                // מעבר בכל מקרה תקין מאינטרנט פנימי
                                navController.navigate(Screen.Home.route) {
                                    popUpTo(Screen.Auth.route) { inclusive = true }
                                }
                            }
                    }
                )
            }
        }

        Spacer(modifier = Modifier.weight(1f))

        if (step > 1) {
            Text(
                text = "חזור לשלב הקודם",
                color = Color.Gray,
                fontSize = 14.sp,
                modifier = Modifier
                    .clickable { step-- }
                    .padding(vertical = 12.dp)
            )
        }
    }
}

@Composable
fun QuestionStep(
    title: String,
    options: List<String>,
    selectedValue: String,
    onSelect: (String) -> Unit
) {
    Column {
        Text(
            text = title,
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold,
            color = Color.White,
            modifier = Modifier.padding(bottom = 24.dp)
        )

        options.forEach { option ->
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 12.dp)
                    .background(
                        if (selectedValue == option) Color(0xFF0066FF) else Color.DarkGray,
                        RoundedCornerShape(8.dp)
                    )
                    .clickable { onSelect(option) }
                    .padding(16.dp)
            ) {
                Text(
                    text = option,
                    color = Color.White,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium
                )
            }
        }
    }
}
`
  },
  {
    name: 'HomeScreen.kt',
    path: 'app/src/main/java/com/elite/performance/ui/screens/HomeScreen.kt',
    code: `package com.elite.performance.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import android.content.Intent
import android.net.Uri
import androidx.compose.ui.platform.LocalContext
import androidx.navigation.NavController

@Composable
fun HomeScreen(navController: NavController) {
    val context = LocalContext.current
    var selectedTab by remember { mutableStateOf(0) }
    var activeSportIndex by remember { mutableStateOf(0) }
    
    val sports = listOf("⚽ כדורגל", "🥋 ג'יו-ג'יטסו", "🎾 טניס", "🏊 שחייה")
    
    Scaffold(
        bottomBar = {
            // persistent navigation RTL organized
            NavigationBar(
                containerColor = Color.Black,
                contentColor = Color.White
            ) {
                NavigationBarItem(
                    selected = selectedTab == 0,
                    onClick = { selectedTab = 0 },
                    icon = { Icon(Icons.Default.Home, contentDescription = "בית") },
                    label = { Text("מסך בית") }
                )
                NavigationBarItem(
                    selected = false,
                    onClick = {
                        val rawMsg = "שלום, שמי ספורטאי, הגעתי דרך האפליקציה שלכם Recovio Academy. אני מעוניין לקבוע תור לקליניקה."
                        val encodedMsg = java.net.URLEncoder.encode(rawMsg, "UTF-8")
                        context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://wa.me/972587858708?text=$encodedMsg")))
                    },
                    icon = { Icon(Icons.Default.LocationOn, contentDescription = "קליניקה") },
                    label = { Text("הקליניקה") }
                )
                NavigationBarItem(
                    selected = selectedTab == 2,
                    onClick = { selectedTab = 2 },
                    icon = { Icon(Icons.Default.ShoppingCart, contentDescription = "חנות") },
                    label = { Text("החנות") }
                )
                NavigationBarItem(
                    selected = selectedTab == 3,
                    onClick = { /* מוגן VIP */ },
                    icon = { Icon(Icons.Default.PlayArrow, contentDescription = "צ'אט") },
                    label = { Text("צ'אט תמיכה [VIP]") }
                )
            }
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black)
                .padding(innerPadding)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            horizontalAlignment = Alignment.Start
        ) {
            // כותרת עליונה
            Text(
                text = "שלום, ספורטאי עלית",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
            Text(
                text = "אנליזה של ביצועים ומכניקת תנועה אקטיבית",
                fontSize = 14.sp,
                color = Color.Gray,
                modifier = Modifier.padding(bottom = 24.dp)
            )

            // 4 כרטיסיות ספורט מוביל
            Text(
                text = "פורטלי ספורט ספציפיים",
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF0066FF),
                modifier = Modifier.padding(bottom = 12.dp)
            )
            
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                sports.forEachIndexed { index, sport ->
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .background(
                                if (activeSportIndex == index) Color(0xFF0066FF) else Color.DarkGray,
                                RoundedCornerShape(8.dp)
                            )
                            .clickable { activeSportIndex = index }
                            .padding(12.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = sport,
                            color = Color.White,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            textAlign = TextAlign.Center
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Section A: Athletic Performance (Level 1, 2, 3)
            Text(
                text = "סקטור א׳: אימון ביצועים אתלטיים",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.padding(bottom = 12.dp)
            )

            LevelItem(
                levelNum = 1,
                title = "רמה 1: בקרת שיווי משקל ובלימה (פתוח)",
                exercisesCount = 5,
                isLocked = false
            )
            
            LevelItem(
                levelNum = 2,
                title = "רמה 2: חוזק מפרקי תחת עומסים (נעול)",
                exercisesCount = 6,
                isLocked = true
            )

            LevelItem(
                levelNum = 3,
                title = "רמה 3: מהירות השק ושיגור כוח (נעול)",
                exercisesCount = 4,
                isLocked = true
            )

            Spacer(modifier = Modifier.height(16.dp))

            // 3-Week Progression Drill
            Text(
                text = "מרתון התקדמות 3-שבועות (3-Week Progression Drill)",
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF0066FF),
                modifier = Modifier.padding(bottom = 10.dp)
            )

            WeekDrillCard(week = 1, name = "בסיס וטכניקה", isLocked = false)
            WeekDrillCard(week = 2, name = "העלאת עומס (נעול ל-7 ימים)", isLocked = true)
            WeekDrillCard(week = 3, name = "שיא ויציבות (נעול ל-14 ימים)", isLocked = true)

            // כפתור מבחן מעבר שלב - נעול עד סיום שבוע 3
            Button(
                onClick = { /* הגשת סרטון */ },
                enabled = false, // נעול קטיגורית
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFF0066FF),
                    disabledContainerColor = Color.DarkGray.copy(alpha = 0.5f)
                ),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 16.dp, bottom = 24.dp)
                    .height(50.dp)
            ) {
                Text("הגש סרטון למבחן מעבר שלב (נעול לשלב 3 בלבד)", color = Color.Gray)
            }

            // Section B: Common Injuries
            Text(
                text = "סקטור ב׳: פציעות נפוצות ומניעה (Common Injuries)",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.padding(bottom = 12.dp)
            )

            Card(
                colors = CardDefaults.cardColors(containerColor = Color.DarkGray),
                modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("פרוטוקולי שיקום ראשוניים בכאב - פתוח", fontWeight = FontWeight.Bold, color = Color.White)
                    Text("צעדים לטיפול עצמאי בכאבי המסטרינגס, דלקת מפרקים ומכה מבודדת.", color = Color.LightGray, fontSize = 13.sp)
                }
            }

            Card(
                colors = CardDefaults.cardColors(containerColor = Color.DarkGray.copy(alpha = 0.4f)),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text("פרוטוקול עזר מקיף חתירה וסקווט - מוגן VIP 🔒", fontWeight = FontWeight.Bold, color = Color.Gray)
                        Text("₪79", color = Color(0xFF0066FF), fontWeight = FontWeight.Bold)
                    }
                    Text("פרוטוקולים נבחרים למתיחות מתקדמות ומניעת שברי מאמץ עצימים.", color = Color.DarkGray, fontSize = 13.sp)
                }
            }
        }
    }
}

@Composable
fun LevelItem(levelNum: Int, title: String, exercisesCount: Int, isLocked: Boolean) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = if (isLocked) Color.DarkGray.copy(alpha = 0.3f) else Color.DarkGray
        ),
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 8.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column {
                Text(
                    text = title,
                    fontWeight = FontWeight.Bold,
                    color = if (isLocked) Color.Gray else Color.White
                )
                Text(
                    text = "מכיל \${exercisesCount} תרגילי אנליזת ביצועים",
                    fontSize = 13.sp,
                    color = Color.Gray
                )
            }
            if (isLocked) {
                Text("🔒 נעול", color = Color.Red, fontSize = 12.sp, fontWeight = FontWeight.Bold)
            } else {
                Text("🔓 פתוח", color = Color.Green, fontSize = 12.sp, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun WeekDrillCard(week: Int, name: String, isLocked: Boolean) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
            .background(
                if (isLocked) Color.DarkGray.copy(alpha = 0.3f) else Color.DarkGray,
                RoundedCornerShape(6.dp)
            )
            .padding(12.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = "שבוע \${week}: \${name}",
            color = if (isLocked) Color.Gray else Color.White,
            fontSize = 14.sp,
            fontWeight = FontWeight.Medium
        )
        if (isLocked) {
            Icon(
                imageVector = Icons.Default.Lock,
                contentDescription = "נעול",
                tint = Color.Gray,
                modifier = Modifier.size(16.dp)
            )
        } else {
            Icon(
                imageVector = Icons.Default.Check,
                contentDescription = "פתוח",
                tint = Color.Green,
                modifier = Modifier.size(16.dp)
            )
        }
    }
}
`
  },
  {
    name: 'EmailVerificationScreen.kt',
    path: 'app/src/main/java/com/elite/performance/ui/screens/EmailVerificationScreen.kt',
    code: `package com.elite.performance.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import kotlinx.coroutines.delay
import com.elite.performance.Screen

@Composable
fun EmailVerificationScreen(navController: NavController) {
    var otp1 by remember { mutableStateOf("") }
    var otp2 by remember { mutableStateOf("") }
    var otp3 by remember { mutableStateOf("") }
    var otp4 by remember { mutableStateOf("") }
    var otp5 by remember { mutableStateOf("") }
    var otp6 by remember { mutableStateOf("") }
    
    var countdown by remember { mutableStateOf(30) }
    var errorText by remember { mutableStateOf<String?>(null) }
    
    LaunchedEffect(key1 = countdown) {
        if (countdown > 0) {
            delay(1000L)
            countdown -= 1
        }
    }
    
    val scrollState = rememberScrollState()
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFF070707))
            .padding(24.dp)
            .verticalScroll(scrollState),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.weight(1f, fill = false)
        ) {
            Spacer(modifier = Modifier.height(36.dp))
            
            // Icon lock
            Surface(
                shape = MaterialTheme.shapes.medium,
                color = Color(0xFF0066FF).copy(alpha = 0.1f),
                modifier = Modifier.size(64.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Icon(
                        imageVector = Icons.Default.Lock,
                        contentDescription = "אימות",
                        tint = Color(0xFF0066FF),
                        modifier = Modifier.size(32.dp)
                    )
                }
            }
            
            Spacer(modifier = Modifier.height(24.dp))
            
            Text(
                text = "אימות כתובת אימייל",
                fontSize = 20.sp,
                color = Color.White,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center
            )
            
            Spacer(modifier = Modifier.height(12.dp))
            
            Text(
                text = "שלחנו קוד אימות לכתובת המייל שלך. נא להזין אותו כאן כדי להמשיך.",
                fontSize = 14.sp,
                color = Color.Gray,
                textAlign = TextAlign.Center,
                lineHeight = 20.sp,
                modifier = Modifier.padding(horizontal = 16.dp)
            )
            
            Spacer(modifier = Modifier.height(32.dp))
            
            // Digit text fields grid (6 digits)
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp, Alignment.CenterHorizontally)
            ) {
                val otpFields = listOf(otp1, otp2, otp3, otp4, otp5, otp6)
                val setOtpFields = listOf(
                    { v: String -> otp1 = v },
                    { v: String -> otp2 = v },
                    { v: String -> otp3 = v },
                    { v: String -> otp4 = v },
                    { v: String -> otp5 = v },
                    { v: String -> otp6 = v }
                )
                
                for (i in 0 until 6) {
                    OutlinedTextField(
                        value = otpFields[i],
                        onValueChange = { newValue ->
                            if (newValue.length <= 1 && (newValue.isEmpty() || newValue.all { it.isDigit() })) {
                                setOtpFields[i](newValue)
                                errorText = null
                            }
                        },
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                        textStyle = LocalTextStyle.current.copy(
                            textAlign = TextAlign.Center,
                            fontSize = 18.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color.Black
                        ),
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedContainerColor = Color.White,
                            unfocusedContainerColor = Color.White,
                            focusedTextColor = Color.Black,
                            unfocusedTextColor = Color.Black,
                            focusedBorderColor = Color(0xFF0066FF),
                            unfocusedBorderColor = Color.LightGray
                        ),
                        // Android: 4.dp thick border + vivid neon high-tech illuminated cyan/blue glow effect when typing
                        modifier = Modifier
                            .width(44.dp)
                            .height(56.dp)
                            .shadow(
                                elevation = 12.dp,
                                shape = RoundedCornerShape(12.dp),
                                ambientColor = Color(0xFF0066FF),
                                spotColor = Color(0xFF0066FF),
                                clip = false
                            )
                    )
                }
            }
            
            errorText?.let {
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    text = it,
                    color = Color.Red,
                    fontSize = 13.sp,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }
        
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // "אמת קוד והמשך" Blue Button
            Button(
                onClick = {
                    val fullCode = otp1 + otp2 + otp3 + otp4 + otp5 + otp6
                    if (fullCode.length < 4) {
                        errorText = "אנא הזן קוד אימות מלא כדי להמשיך."
                    } else {
                        errorText = null
                        navController.navigate(Screen.MedicalDisclaimer.route)
                    }
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0066FF)),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(52.dp)
            ) {
                Text(
                    text = "אמת קוד והמשך",
                    color = Color.White,
                    fontWeight = FontWeight.Bold,
                    fontSize = 16.sp
                )
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            // Countdown Text or Resend Link
            if (countdown > 0) {
                Text(
                    text = "ניתן לשלוח קוד חדש בעוד ${'$'}{countdown} שניות",
                    color = Color.Gray,
                    fontSize = 12.sp
                )
            } else {
                Text(
                    text = "שלח שוב",
                    color = Color(0xFF0066FF),
                    fontWeight = FontWeight.Bold,
                    fontSize = 13.sp,
                    modifier = Modifier.clickable {
                        countdown = 30
                        otp1 = ""
                        otp2 = ""
                        otp3 = ""
                        otp4 = ""
                        otp5 = ""
                        otp6 = ""
                        errorText = null
                    }
                )
            }
            
            Spacer(modifier = Modifier.height(12.dp))
            
            Text(
                text = "חזור למסך ההרשמה",
                color = Color.Gray,
                fontSize = 12.sp,
                modifier = Modifier.clickable {
                    navController.popBackStack()
                }
            )
            
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}
`
  }
];
