/**
 * Object representation of a video.
 */
export class Video{
   constructor() 
	{ 
	}

  // Unique identifier
  _id: string;
  
  // Video's name
  name: string;
  
  // Video's description
  description: string;
  
  // Video's Url
  url?: string;
  
  // Array of historic ratings
  ratings?: number[];
  
  // Video's average rating
  rating?: number;
  
  // Used to color the rating star element appropriately
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  five?: string;
}
