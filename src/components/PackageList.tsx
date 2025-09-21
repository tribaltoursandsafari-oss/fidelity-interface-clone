import React from 'react';
import { Star, MapPin, Calendar, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TravelPackage } from './TravelBooking';
import veniceImg from '@/assets/venice-thumbnail.jpg';
import safariImg from '@/assets/safari-adventure.jpg';
import alpineImg from '@/assets/alpine-escape.jpg';
import seoulImg from '@/assets/seoul-cultural.jpg';
import parisImg from '@/assets/parisian-romance.jpg';
import tokyoImg from '@/assets/tokyo-cultural.jpg';

const imageMap = {
  'venice-thumbnail': veniceImg,
  'safari-adventure': safariImg,
  'alpine-escape': alpineImg,
  'seoul-cultural': seoulImg,
  'parisian-romance': parisImg,
  'tokyo-cultural': tokyoImg,
};

interface PackageListProps {
  packages: TravelPackage[];
  selectedPackage: TravelPackage;
  onSelectPackage: (pkg: TravelPackage) => void;
  searchQuery: string;
}

export const PackageList: React.FC<PackageListProps> = ({
  packages,
  selectedPackage,
  onSelectPackage,
  searchQuery,
}) => {
  const filteredPackages = packages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredPackages.map((pkg) => (
        <Card
          key={pkg.id}
          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
            selectedPackage.id === pkg.id 
              ? 'ring-2 ring-primary bg-accent' 
              : 'hover:bg-accent/50'
          }`}
          onClick={() => onSelectPackage(pkg)}
        >
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={imageMap[pkg.image as keyof typeof imageMap]}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1 truncate">
                  {pkg.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{pkg.duration} / {pkg.nights}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-travel-rating text-travel-rating" />
                    <span className="text-xs font-medium">{pkg.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary">
                      ${pkg.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      /person
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        className="w-full mt-4 bg-primary hover:bg-primary-hover text-primary-foreground"
        size="lg"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Package
      </Button>
    </div>
  );
};