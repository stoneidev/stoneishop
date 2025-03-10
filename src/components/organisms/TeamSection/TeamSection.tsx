import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  bio,
}) => {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
      <Typography variant="h3" className="text-xl font-medium mb-1">
        {name}
      </Typography>
      <Typography variant="body2" className="text-primary mb-3">
        {role}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        {bio}
      </Typography>
    </div>
  );
};

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMemberProps[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  subtitle,
  members,
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-3xl font-medium mb-4">
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 