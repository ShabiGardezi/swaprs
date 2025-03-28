import {
  Users,
  Smartphone,
  Search,
  Award,
  Globe,
  Clock,
  Shield,
  Heart,
  Zap,
  Share2,
} from "lucide-react";

export default function KeyFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-purple-500 px-3 py-1 text-sm font-semibold text-white">
            KEY FEATURES
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-5">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-sm font-medium">
              Find people with similar interests
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Smartphone className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-sm font-medium">
              Manage your skills inventory
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <Search className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-sm font-medium">
              Search and find services you need
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              <Award className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-sm font-medium">
              Verify your identity for greater trust
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Globe className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-sm font-medium">
              Connect with your local community
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Clock className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-sm font-medium">
              Track the time spent on your services
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-sm font-medium">
              Protect your personal information
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <Heart className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-sm font-medium">
              Rate and review your experiences
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              <Zap className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-sm font-medium">Instant notifications</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Share2 className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-sm font-medium">
              Share with the rest of the community
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
