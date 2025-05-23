import { NavLink } from "react-router-dom";
import Button from "../Component/Ui/Button";
import Input from "../Component/Ui/Input";
import Label from "../Component/Ui/Label";

export default function Register() {
  return (
    <div className="container mx-auto max-w-md px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-gray-600 mt-2">Sign up to get started</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="••••••••" required />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>

            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 
                    9.8 8.205 11.387.6.113.82-.258.82-.577 
                    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 
                    1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 
                    3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93 
                    0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                    0 0 1.005-.322 3.3 1.23.96-.267 
                    1.98-.399 3-.405 1.02.006 2.04.138 
                    3 .405 2.28-1.552 3.285-1.23 
                    3.285-1.23.645 1.653.24 2.873.12 
                    3.176.765.84 1.23 1.91 1.23 3.22 
                    0 4.61-2.805 5.625-5.475 5.92.435.375.825 
                    1.096.825 2.22 0 1.606-.015 2.896-.015 
                    3.286 0 .315.21.694.825.576C20.565 
                    22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </Button>
          </div>
        </div>

        {/* Already have account */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <NavLink to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
