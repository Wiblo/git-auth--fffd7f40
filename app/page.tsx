import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Smartphone, Calendar, Heart, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            StylePick
          </span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">How it Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Reviews</a>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Download App
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
          AI-Powered Fashion Assistant
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Your Perfect Outfit,
          <br />
          Every Single Day
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Never struggle with what to wear again. StylePick uses AI to curate personalized outfit suggestions based on your wardrobe, weather, and occasion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
            <Smartphone className="mr-2 h-5 w-5" />
            Download for iOS
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
            <Smartphone className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
        </div>

        {/* App Preview Mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-30 rounded-full"></div>
            <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Mock Phone Screen 1 */}
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-lg aspect-[9/16]">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-sm opacity-90 mb-2">Today's Weather: Sunny, 72°F</p>
                        <h3 className="text-2xl font-bold mb-4">Your Outfit</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">White Linen Shirt</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Blue Denim Jeans</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Brown Leather Sneakers</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Phone Screen 2 */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-lg aspect-[9/16]">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-sm opacity-90 mb-2">Occasion: Business Meeting</p>
                        <h3 className="text-2xl font-bold mb-4">Suggested Look</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Navy Blazer</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">White Oxford Shirt</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Black Dress Shoes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Phone Screen 3 */}
                  <div className="bg-gradient-to-br from-pink-600 to-orange-600 rounded-3xl p-6 text-white shadow-lg aspect-[9/16]">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-sm opacity-90 mb-2">Event: Date Night</p>
                        <h3 className="text-2xl font-bold mb-4">Perfect Match</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Black Dress</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Leather Jacket</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                          <p className="text-sm">Ankle Boots</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why You'll Love StylePick
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Smart features designed to make getting dressed effortless and fun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Suggestions</h3>
              <p className="text-gray-600">
                Our smart AI learns your style preferences and suggests outfits you'll love
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors hover:shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Weather-Based Outfits</h3>
              <p className="text-gray-600">
                Get outfit suggestions based on real-time weather and temperature
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors hover:shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-pink-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Virtual Wardrobe</h3>
              <p className="text-gray-600">
                Digitize your entire wardrobe and see all your clothes in one place
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Occasion-Based Styling</h3>
              <p className="text-gray-600">
                Get perfect outfit suggestions for any occasion, from casual to formal
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors hover:shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-blue-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Style Recommendations</h3>
              <p className="text-gray-600">
                Discover new style combinations and trends personalized to your taste
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors hover:shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Outfit History</h3>
              <p className="text-gray-600">
                Track what you wore and when, never repeat the same look too soon
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Loved by Fashion Enthusiasts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who've transformed their daily styling routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-100">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "StylePick has completely changed my morning routine. I used to spend 30 minutes deciding what to wear, now it takes me 2 minutes!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-100">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The AI suggestions are spot on! It's like having a personal stylist in my pocket. I've received so many compliments on my outfits."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-pink-100">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I love how it considers the weather and occasion. The virtual wardrobe feature helps me make the most of what I already own."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400"></div>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Creative Director</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Upgrade Your Style?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download StylePick today and never have a "nothing to wear" moment again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                <Smartphone className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white hover:bg-white/10">
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Free to download. Premium features available.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StylePick
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Your AI-powered fashion assistant for perfect outfit choices every day.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; 2024 StylePick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
