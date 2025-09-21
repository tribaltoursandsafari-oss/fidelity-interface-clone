import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { PackageList } from './PackageList';
import { PackageDetail } from './PackageDetail';
import { TripSchedule } from './TripSchedule';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface TravelPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  nights: string;
  rating: number;
  price: number;
  image: string;
  description: string;
  includes: string[];
  schedule: ScheduleDay[];
}

export interface ScheduleDay {
  day: number;
  title: string;
  type: 'Activity' | 'Evening' | 'Free time';
  description: string;
  details?: string;
}

const packages: TravelPackage[] = [
  {
    id: '1',
    title: 'Venice Dreams',
    location: 'Venice, Italy',
    duration: '6 Days',
    nights: '5 nights',
    rating: 4.5,
    price: 1500,
    image: 'venice-thumbnail',
    description: 'Immerse yourself in the timeless beauty and romance of Venice with our Venice Dreams package. Explore the enchanting canals, historic architecture, and vibrant culture of this magical city. This package offers a perfect blend of guided tours and leisure time to experience Venice at your own pace.',
    includes: [
      'Accommodation in a charming boutique hotel along the Grand Canal',
      'Daily breakfast and one traditional Venetian dinner',
      'Gondola ride through the canals',
      'Guided tour of St. Mark\'s Basilica and Doge\'s Palace',
      'Visit to the Murano glass-blowing factory',
      'Leisure time for exploring local markets and cafes',
      'Free airport transfers',
      'Complimentary welcome drink'
    ],
    schedule: [
      {
        day: 1,
        title: 'Arrival in Venice',
        type: 'Activity',
        description: 'Transfer to hotel, welcome drink, and orientation',
        details: 'Leisure time to explore local surroundings'
      },
      {
        day: 2,
        title: 'Guided City Tour',
        type: 'Activity',
        description: 'Guided tour of St. Mark\'s Basilica and Doge\'s Palace',
        details: 'Traditional Venetian dinner'
      },
      {
        day: 3,
        title: 'Murano and Burano',
        type: 'Activity',
        description: 'Visit to Murano glass-blowing factory, exploration of Burano island',
        details: 'Free time'
      },
      {
        day: 4,
        title: 'Cultural Immersion',
        type: 'Activity',
        description: 'Visit to local markets, optional cooking class',
        details: 'Free time to explore cafes and restaurants'
      },
      {
        day: 5,
        title: 'Leisure Day',
        type: 'Free time',
        description: 'Free day to explore Venice on your own, optional activities',
        details: 'Farewell gathering'
      },
      {
        day: 6,
        title: 'Departure',
        type: 'Activity',
        description: 'Transfer to airport for departure'
      }
    ]
  },
  {
    id: '2',
    title: 'Safari Adventure',
    location: 'Serengeti, Tanzania',
    duration: '8 Days',
    nights: '7 nights',
    rating: 5,
    price: 3200,
    image: 'safari-adventure',
    description: 'Experience the ultimate African safari adventure in the pristine wilderness of Serengeti National Park.',
    includes: [
      'Luxury safari lodge accommodation',
      'All meals included',
      'Professional safari guide',
      'Game drives in 4x4 vehicles',
      'Visit to Maasai village',
      'Hot air balloon safari (optional)',
      'Airport transfers',
      'Travel insurance'
    ],
    schedule: []
  },
  {
    id: '3',
    title: 'Alpine Escape',
    location: 'Swiss Alps, Switzerland',
    duration: '7 Days',
    nights: '6 nights',
    rating: 4,
    price: 2100,
    image: 'alpine-escape',
    description: 'Discover the breathtaking beauty of the Swiss Alps with hiking, scenic railways, and mountain adventures.',
    includes: [
      'Mountain resort accommodation',
      'Daily breakfast',
      'Scenic train rides',
      'Guided hiking tours',
      'Cable car passes',
      'Traditional Swiss dinner',
      'Equipment rental',
      'Local guide services'
    ],
    schedule: []
  },
  {
    id: '4',
    title: 'Seoul Cultural Exploration',
    location: 'Seoul, South Korea',
    duration: '10 Days',
    nights: '9 nights',
    rating: 5,
    price: 2800,
    image: 'seoul-cultural',
    description: 'Immerse yourself in Korean culture, cuisine, and history in the vibrant city of Seoul.',
    includes: [
      'Central Seoul hotel',
      'Daily breakfast',
      'Cultural workshops',
      'Temple visits',
      'Korean cooking class',
      'K-pop experience tour',
      'Traditional market visits',
      'Local transportation pass'
    ],
    schedule: []
  },
  {
    id: '5',
    title: 'Parisian Romance',
    location: 'Paris, France',
    duration: '5 Days',
    nights: '4 nights',
    rating: 4.5,
    price: 1200,
    image: 'parisian-romance',
    description: 'Fall in love with the City of Light on this romantic getaway through Paris\'s most enchanting locations.',
    includes: [
      'Boutique hotel in Montmartre',
      'Daily breakfast',
      'Seine river cruise',
      'Eiffel Tower dinner',
      'Louvre Museum skip-the-line',
      'Wine tasting experience',
      'Private city tour',
      'Metro travel pass'
    ],
    schedule: []
  },
  {
    id: '6',
    title: 'Tokyo Cultural Adventure',
    location: 'Tokyo, Japan',
    duration: '7 Days',
    nights: '6 nights',
    rating: 4.5,
    price: 1800,
    image: 'tokyo-cultural',
    description: 'Experience the perfect blend of traditional and modern Japan in the bustling metropolis of Tokyo.',
    includes: [
      'Tokyo city center hotel',
      'Daily breakfast',
      'Sushi making class',
      'Temple and shrine visits',
      'Sumo wrestling experience',
      'Mount Fuji day trip',
      'Traditional tea ceremony',
      'JR Pass for transportation'
    ],
    schedule: []
  }
];

export const TravelBooking: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage>(packages[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border p-4">
        <div className="flex items-center gap-4 max-w-7xl mx-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search package, location, etc"
              className="pl-10 bg-card border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary-hover">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar - Package List */}
        <div className="w-80 p-4 border-r border-border bg-card">
          <PackageList
            packages={packages}
            selectedPackage={selectedPackage}
            onSelectPackage={setSelectedPackage}
            searchQuery={searchQuery}
          />
        </div>

        {/* Center - Package Detail */}
        <div className="flex-1 p-6">
          <PackageDetail package={selectedPackage} />
        </div>

        {/* Right Sidebar - Trip Schedule */}
        <div className="w-80 p-4 border-l border-border bg-card">
          <TripSchedule schedule={selectedPackage.schedule} />
        </div>
      </div>
    </div>
  );
};