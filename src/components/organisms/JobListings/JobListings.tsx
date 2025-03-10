import React from "react";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";

interface JobProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const JobCard: React.FC<JobProps> = ({
  id,
  title,
  department,
  location,
  type,
  description,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Typography variant="h3" className="text-xl font-medium mb-1">
            {title}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {department} · {location} · {type}
          </Typography>
        </div>
      </div>
      <Typography variant="body2" className="text-gray-600 mb-6 line-clamp-3">
        {description}
      </Typography>
      <Link href={`/careers/${id}`}>
        <Button
          variant="outlined"
          className="text-sm px-4 py-2 border-black text-black hover:bg-black hover:text-white transition-colors"
        >
          자세히 보기
        </Button>
      </Link>
    </div>
  );
};

interface JobListingsProps {
  title: string;
  subtitle: string;
  jobs: JobProps[];
}

export const JobListings: React.FC<JobListingsProps> = ({
  title,
  subtitle,
  jobs,
}) => {
  return (
    <div className="py-16 bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              department={job.department}
              location={job.location}
              type={job.type}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 