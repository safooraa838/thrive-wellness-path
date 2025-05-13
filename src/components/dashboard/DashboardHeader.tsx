
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DashboardHeader = () => {
  // Helper function to format date
  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString('en-US', options);
  };

  // Dummy streak data
  const currentStreak = 5;
  const maxStreak = 14;

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">{formatDate()}</p>
        </div>
        <div className="flex items-center mt-4 sm:mt-0 space-x-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Log Workout
          </Button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="mr-4">
              <h2 className="text-lg font-semibold">Current Streak</h2>
              <p className="text-3xl font-bold text-purple-600">{currentStreak} days</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
            <div className="ml-0 sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-sm text-muted-foreground">Longest Streak</h2>
              <p className="text-lg font-semibold">{maxStreak} days</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {Array(7).fill(0).map((_, i) => (
              <div 
                key={i} 
                className={`streak-dot ${i < currentStreak % 7 ? "streak-dot-active" : "streak-dot-inactive"}`}
                title={i < currentStreak % 7 ? "Active day" : "Inactive day"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
