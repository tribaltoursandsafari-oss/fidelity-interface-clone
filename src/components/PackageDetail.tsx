import React from 'react';
import { Star, MapPin, Calendar, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TravelPackage } from './TravelBooking';
import veniceHeroImg from '@/assets/venice-dreams.jpg';

interface PackageDetailProps {
  package: TravelPackage;
}

export const PackageDetail: React.FC<PackageDetailProps> = ({ package: pkg }) => {
  // Create array of 5 stars for rating display
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={veniceHeroImg}
          alt={pkg.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Button variant="secondary" size="sm">
            Edit Package
          </Button>
        </div>
      </div>

      {/* Package Title and Rating */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{pkg.title}</h1>
          <div className="flex items-center gap-1 mb-1">
            {stars.map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= pkg.rating
                    ? 'fill-travel-rating text-travel-rating'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium">{pkg.rating}</span>
            <span className="text-sm text-muted-foreground">(2,936 ratings)</span>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <div>
              <span className="text-sm">Location</span>
              <p className="font-medium text-foreground">{pkg.location}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <div>
              <span className="text-sm">Duration</span>
              <p className="font-medium text-foreground">{pkg.duration} / {pkg.nights}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Users className="h-5 w-5" />
            <div>
              <span className="text-sm">Quota</span>
              <p className="font-medium text-foreground">20 participants</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <DollarSign className="h-5 w-5" />
            <div>
              <span className="text-sm">Price</span>
              <p className="font-medium text-primary">
                ${pkg.price.toLocaleString()} <span className="text-sm font-normal">per person</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">ABOUT</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {pkg.description}
          </p>
        </CardContent>
      </Card>

      {/* Includes Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">INCLUDES</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pkg.includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};