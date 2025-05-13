
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Weight } from "lucide-react";

const ActivitySummary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's Steps</CardTitle>
          <Activity className="h-5 w-5 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">8,256</div>
          <p className="text-xs text-muted-foreground mt-1">
            +5% from yesterday
          </p>
          <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-thrive-400 rounded-full" 
              style={{ width: '68%' }} 
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            68% of daily goal
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
          <Heart className="h-5 w-5 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">72 <span className="text-base font-normal text-muted-foreground">bpm</span></div>
          <p className="text-xs text-muted-foreground mt-1">
            Resting heart rate
          </p>
          <div className="mt-4 grid grid-cols-7 gap-1">
            {[60, 65, 68, 72, 75, 70, 72].map((rate, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-12 w-1 bg-gray-100 rounded-full relative overflow-hidden">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500 to-thrive-400 rounded-full" 
                    style={{ height: `${Math.min(100, rate / 1.5)}%` }} 
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Weight</CardTitle>
          <Weight className="h-5 w-5 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">165 <span className="text-base font-normal text-muted-foreground">lbs</span></div>
          <p className="text-xs text-muted-foreground mt-1">
            -2.5 lbs this month
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">160</span>
            <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-thrive-400 rounded-full" 
                style={{ width: '50%' }} 
              />
            </div>
            <span className="text-xs text-muted-foreground">170</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Target range: 160-170 lbs
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivitySummary;
