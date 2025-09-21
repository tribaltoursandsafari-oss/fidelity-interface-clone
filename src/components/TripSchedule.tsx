import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScheduleDay } from './TravelBooking';

interface TripScheduleProps {
  schedule: ScheduleDay[];
}

const getTypeColor = (type: ScheduleDay['type']) => {
  switch (type) {
    case 'Activity':
      return 'bg-primary text-primary-foreground';
    case 'Evening':
      return 'bg-secondary text-secondary-foreground';
    case 'Free time':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const TripSchedule: React.FC<TripScheduleProps> = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Trip Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Schedule details will be provided soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Trip Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {schedule.map((day) => (
          <div key={day.day} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">
                Day {day.day} - {day.title}
              </h3>
            </div>
            
            <div className="space-y-2">
              <Badge variant="secondary" className={getTypeColor(day.type)}>
                {day.type}
              </Badge>
              
              <p className="text-sm text-foreground leading-relaxed">
                {day.description}
              </p>
              
              {day.details && (
                <>
                  <Badge variant="outline" className="text-xs">
                    Evening
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {day.details}
                  </p>
                </>
              )}
            </div>
            
            {day.day < schedule.length && (
              <div className="border-b border-border pb-3" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};