
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

const GoalTracker = () => {
  const goals = [
    {
      id: 1,
      name: "Lose 10 pounds",
      target: "10 lbs",
      progress: 2.5,
      percentage: 25,
      dueDate: "May 30, 2025",
    },
    {
      id: 2,
      name: "Run 5K under 25 minutes",
      target: "25:00",
      bestTime: "27:15",
      progress: 70,
      percentage: 70,
      dueDate: "Apr 15, 2025",
    },
    {
      id: 3,
      name: "Complete 20 workouts this month",
      target: "20 workouts",
      progress: 12,
      percentage: 60,
      dueDate: "May 31, 2025",
    }
  ];

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Your Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal) => (
            <div key={goal.id} className="border rounded-lg p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-medium">{goal.name}</h4>
                  <p className="text-sm text-muted-foreground">Due: {goal.dueDate}</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">In Progress</Badge>
              </div>

              <div className="flex items-end justify-between mb-2">
                <span className="text-sm font-medium">
                  {goal.progress} {goal.id === 1 ? "lbs" : goal.id === 2 ? "" : "workouts"}
                </span>
                <span className="text-sm text-muted-foreground">
                  Target: {goal.target}
                </span>
              </div>

              <Progress value={goal.percentage} className="h-2" />

              {goal.id === 2 && (
                <p className="mt-2 text-xs text-muted-foreground">Best time: {goal.bestTime}</p>
              )}
            </div>
          ))}

          <div className="border rounded-lg p-4 bg-green-50">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h4 className="font-medium flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                  Workout 3 times a week
                </h4>
                <p className="text-sm text-muted-foreground">Completed on May 10, 2025</p>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
            </div>
            <Progress value={100} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
          </div>

          <button className="w-full py-2 px-4 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition-colors">
            Add New Goal
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;
