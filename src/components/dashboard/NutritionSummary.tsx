
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const NutritionSummary = () => {
  // Dummy data for nutrition tracking
  const nutrition = {
    calories: {
      consumed: 1450,
      goal: 2000,
      percentage: 72.5
    },
    macros: {
      protein: { consumed: 95, goal: 140, percentage: 68 },
      carbs: { consumed: 160, goal: 225, percentage: 71 },
      fat: { consumed: 40, goal: 65, percentage: 62 }
    },
    water: {
      consumed: 5,
      goal: 8,
      percentage: 62.5
    }
  };

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Nutrition Today</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Calories */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Calories</span>
              <span className="text-sm text-muted-foreground">
                {nutrition.calories.consumed} / {nutrition.calories.goal} kcal
              </span>
            </div>
            <Progress value={nutrition.calories.percentage} className="h-2" />
          </div>

          {/* Macros */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Macros</h4>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">Protein</span>
                <span className="text-xs text-muted-foreground">
                  {nutrition.macros.protein.consumed}g / {nutrition.macros.protein.goal}g
                </span>
              </div>
              <Progress 
                value={nutrition.macros.protein.percentage} 
                className="h-1.5 bg-gray-100" 
                indicatorClassName="bg-thrive-500"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">Carbs</span>
                <span className="text-xs text-muted-foreground">
                  {nutrition.macros.carbs.consumed}g / {nutrition.macros.carbs.goal}g
                </span>
              </div>
              <Progress 
                value={nutrition.macros.carbs.percentage} 
                className="h-1.5 bg-gray-100"
                indicatorClassName="bg-purple-400"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">Fat</span>
                <span className="text-xs text-muted-foreground">
                  {nutrition.macros.fat.consumed}g / {nutrition.macros.fat.goal}g
                </span>
              </div>
              <Progress 
                value={nutrition.macros.fat.percentage} 
                className="h-1.5 bg-gray-100"
                indicatorClassName="bg-purple-600"
              />
            </div>
          </div>

          {/* Water Intake */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Water Intake</span>
              <span className="text-sm text-muted-foreground">
                {nutrition.water.consumed} / {nutrition.water.goal} glasses
              </span>
            </div>
            <div className="flex space-x-1">
              {Array(nutrition.water.goal).fill(0).map((_, index) => (
                <div 
                  key={index}
                  className={`h-8 flex-1 rounded ${
                    index < nutrition.water.consumed
                      ? "bg-gradient-to-t from-thrive-500 to-thrive-300"
                      : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
          </div>

          <button className="w-full mt-2 py-2 px-4 text-center text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline transition-colors">
            Log meal
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionSummary;
