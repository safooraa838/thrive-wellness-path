
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ActivitySummary from "@/components/dashboard/ActivitySummary";
import WorkoutSummary from "@/components/dashboard/WorkoutSummary";
import NutritionSummary from "@/components/dashboard/NutritionSummary";
import GoalTracker from "@/components/dashboard/GoalTracker";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
          <ActivitySummary />
        </section>
        
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <WorkoutSummary />
            <NutritionSummary />
          </div>
        </section>
        
        <section>
          <GoalTracker />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
