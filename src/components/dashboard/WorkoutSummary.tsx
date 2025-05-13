
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const WorkoutSummary = () => {
  // Dummy data for recent workouts
  const recentWorkouts = [
    {
      id: 1,
      name: "Upper Body Strength",
      date: "Today",
      duration: "45 min",
      type: "Strength",
      intensity: "Moderate",
    },
    {
      id: 2,
      name: "HIIT Circuit",
      date: "Yesterday",
      duration: "30 min",
      type: "HIIT",
      intensity: "Intense",
    },
    {
      id: 3,
      name: "Morning Yoga Flow",
      date: "2 days ago",
      duration: "60 min",
      type: "Yoga",
      intensity: "Light",
    }
  ];

  // Intensity badge colors
  const intensityColors = {
    Light: "bg-green-100 text-green-800",
    Moderate: "bg-yellow-100 text-yellow-800",
    Intense: "bg-red-100 text-red-800"
  };

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Workouts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentWorkouts.map((workout) => (
            <div 
              key={workout.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="mb-2 sm:mb-0">
                <h4 className="font-medium">{workout.name}</h4>
                <div className="flex items-center text-sm text-muted-foreground mt-1 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {workout.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {workout.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{workout.type}</Badge>
                <Badge className={intensityColors[workout.intensity as keyof typeof intensityColors]}>
                  {workout.intensity}
                </Badge>
              </div>
            </div>
          ))}
          <button className="w-full mt-2 py-2 px-4 text-center text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline transition-colors">
            View all workouts
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutSummary;
