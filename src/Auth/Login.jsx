import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";

// Custom Card components
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-md p-6 ${className || ""}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`mb-4 ${className || ""}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h2 className={`text-2xl font-bold ${className || ""}`}>{children}</h2>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-600 ${className || ""}`}>{children}</p>
);

const CardContent = ({ children, className }) => (
  <div className={`mb-4 ${className || ""}`}>{children}</div>
);

const CardFooter = ({ children, className }) => (
  <div className={`mt-4 ${className || ""}`}>{children}</div>
);

const Input = ({ id, type, placeholder, value, onChange, className, ...props }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-thrive-500 ${className}`}
    {...props}
  />
);

const Button = ({ children, type = "button", className, disabled, onClick, variant = "default" }) => {
  const base =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      : "bg-thrive-500 text-white hover:bg-thrive-600";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${base} ${className}`}
    >
      {children}
    </button>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully logged in");
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Log in to your Thrive account to access your job recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="#" className="text-sm text-thrive-500 hover:text-thrive-600">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M21.35 11.1H12v2.8h5.35c-.24 1.31-.94 2.42-2 3.18v2.64h3.23c1.89-1.74 2.97-4.3 2.97-7.35 0-.64-.06-1.27-.2-1.87z" />
                    <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.63-2.43l-3.23-2.64c-.89.6-2.03.94-3.4.94-2.61 0-4.83-1.76-5.62-4.13H3.05v2.6C4.7 19.98 8.06 22 12 22z" />
                    <path fill="#FBBC05" d="M6.38 13.74A5.992 5.992 0 0 1 6 12c0-.6.1-1.17.28-1.74V7.66H3.05A10.002 10.002 0 0 0 2 12c0 1.64.4 3.18 1.05 4.34l3.33-2.6z" />
                    <path fill="#EA4335" d="M12 6.15c1.47 0 2.8.51 3.84 1.52l2.88-2.88C17.03 2.94 14.76 2 12 2 8.06 2 4.7 4.02 3.05 7.66l3.33 2.6C7.17 7.91 9.39 6.15 12 6.15z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 1A10.5 10.5 0 0 0 3 11.5 10.5 10.5 0 0 0 13.5 22H22V11.5A10.5 10.5 0 0 0 13.5 1zm0 2A8.5 8.5 0 0 1 22 11.5V20h-8.5a8.5 8.5 0 0 1 0-17z" />
                  </svg>
                  GitHub
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-thrive-500 hover:text-thrive-600 font-medium">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
