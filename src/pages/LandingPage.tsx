
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, Activity, Utensils, LineChart } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Track Your Fitness Journey With <span className="text-thrive-300">Thrive</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                The all-in-one platform to track your workouts, monitor your nutrition, and achieve your fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-thrive-500 hover:bg-thrive-600 text-white">
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                  <Link to="/login">
                    Log In <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-thrive-400 rounded-full filter blur-3xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20 transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="Fitness tracking app" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Today's Goal</p>
                      <p className="font-medium text-sm">Completed!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need To Reach Your Goals</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive platform offers all the tools you need to track, analyze, and improve your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Workout Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Log and track all your workouts, from strength training to cardio and yoga sessions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Custom workout plans</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Progress tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Exercise library</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-thrive-100 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-thrive-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nutrition Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Track your daily meals, count macros, and ensure you're fueling your body properly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Calorie tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Macronutrient breakdown</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Meal planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Visualize your progress with detailed charts and insights to optimize your fitness journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Visual progress charts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Goal tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Personalized insights</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/signup">Start Your Fitness Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Fitness Enthusiasts</h2>
            <p className="text-lg text-muted-foreground">
              Hear what our users have to say about their experience with Thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-purple-600">S</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Thrive has completely transformed my fitness routine. The ability to track my workouts and nutrition in one place has made it so much easier to stay consistent and see my progress."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-thrive-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-thrive-600">M</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Marathon Runner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a marathon runner, tracking my progress is crucial. Thrive gives me all the data I need to optimize my training and recovery. The goal setting feature keeps me motivated even on tough days."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-purple-600">K</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Kayla Thompson</h4>
                  <p className="text-sm text-muted-foreground">Yoga Instructor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I love how Thrive offers a holistic approach to fitness. Not just tracking workouts, but also nutrition and overall wellness. It's helped me maintain balance in my fitness journey."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have taken control of their health and fitness with Thrive.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
            <Link to="/signup">Get Started For Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
