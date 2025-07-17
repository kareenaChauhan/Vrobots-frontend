import React, { useEffect, useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { TOKEN_CREATE } from '../../graphql/mutations/auth';
import { useAuthContext } from '../../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();
  const [tokenCreate] = useMutation(TOKEN_CREATE);
  const { login , user} = useAuthContext(); // Use AuthContext for login
  
  useEffect(()=>{
    if (user) {
      navigate('/');
    }
  },[]);
  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { data } = await tokenCreate({
        variables: {
          email,
          password,
        },
      });

      const result = data?.tokenCreate;

      if (result?.errors?.length) {
        const serverErrors: Record<string, string> = {};
        result.errors.forEach((err: any) => {
          serverErrors[err.field || 'general'] = err.message;
        });
        setErrors(serverErrors);
      } else {
        // localStorage.setItem("accessToken", result.token);
        // localStorage.setItem("refreshToken", result.refreshToken);
        if (result.token) {
          login(result.token, result.refreshToken);
        }
        console.log('Login successful', result.user);
        navigate("/");
      }
    } catch (err) {
      console.error('Login error', err);
      // setErrors({ general: "Unexpected error during login." });
    }
  };

  const handleRegister = () => {
    console.log('Navigate to register page');
    navigate('/register');
    // Handle register navigation here
  };

  const handleForgotPassword = () => {
    console.log('Navigate to forgot password page');
    // Handle forgot password logic here
  };

  return (!user &&
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Title - Mobile */}
      <div className="lg:hidden bg-white py-6 border-b bg-light-gray">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">My Account</h1>
          <div className="flex justify-center space-x-2 text-xs md:text-sm text-gray-600">
            <button className="hover:text-gray-900 transition-colors">Home</button>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-gray-900">My Account</span>
          </div>
        </div>
      </div>

      {/* Main Login Section */}
      <div className="container mx-auto px-4 py-6 lg:py-0">
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px] bg-white rounded-lg lg:rounded-none shadow-sm lg:shadow-none overflow-hidden">
          {/* Left Side - Hero Section with Image */}
          <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
            {/* Page Title - Desktop Only */}
            <div className="absolute top-8 left-0 z-20">
              <h1 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">My Account</h1>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                <button className="hover:text-gray-900 transition-colors">Home</button>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-gray-900">My Account</span>
              </div>
            </div>

            {/* Background Image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img
                src="https://mooncart.dexignzone.com/xhtml/images/registration/pic2.png"
                alt="Login Background"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0  bg-opacity-10"></div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 lg:flex-1 flex items-center justify-center p-6 md:p-8 lg:p-16 bg-white ">
            <div className=" w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
              {/* Welcome Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  welcome please login to your account
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSignIn} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-50 border bg-light-gray rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-3 pr-12 bg-gray-50 border bg-light-gray rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.password}</span>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember Me</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors text-left sm:text-right"
                  >
                    Forgot Password
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
                  >
                    SIGN IN
                  </button>
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="flex-1 bg-white text-gray-900 py-3 px-6 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
                  >
                    REGISTER
                  </button>
                </div>
              </form>

              {/* Social Login Options - Optional */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="ml-2">Google</span>
                  </button>

                  <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="ml-2">Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
