// what is a recipe?
export interface Recipe {
    id: string;
    name: string;
    ingredients: RecipeIngredient[];
    instructions: RecipeInstruction[];
    image: string;
    video_url: string;
    gallery: RecipeGallery[];
    time_allocations: TimeAllocation;
    calories: number;
    diet_breakdown: DietBreakdown;
    servings: number;
    ratings: Rating;
    categories: Category[];
    chef: ChefProfile;
    isBookmarked: boolean;
    isPublic: boolean;
    created_at: string;
    last_updated_on: string;
  }
  
  // sum / count -> average
  
  export interface RecipeIngredient {
    id: string;
    quantity?: number;
    unit?: FoodMeasurementUnit;
    ingredient: string;
  }
  
  export interface RecipeInstruction {
    id: string;
    title: string;
    description: string;
  }
  
  export interface RecipeGallery {
    id: string;
    url: string;
  }
  
  export enum FoodMeasurementUnit {
    "tablespoon" = "table spoon",
    "teaspoon" = "tea spoon",
    "cup" = "cup",
    "pinch" = "pinch",
  }
  
  export interface RecipeTimeAllocations {
    preparation: TimeAllocation;
    cooking: TimeAllocation;
    total: TimeAllocation;
  }
  
  export interface TimeAllocation {
    duration: number;
    duration_description: TimeAllocationDescription;
  }
  
  export enum TimeAllocationDescription {
    "min" = "minute",
    "hr" = "hour",
  }
  
  export interface DietBreakdown {
    fat: number;
    carbs: number;
    protein: number;
  }
  
  export interface Rating {
    average_rating: number;
    total_rating: number;
    chefs_who_rated: number;
  }
  
  export interface Category {
    id: string;
    title: string;
  }
  
  // snapshot
  export interface ChefProfile {
    id: string;
    name: string;
    avatar: string;
  }
  
  export interface Chef {
    id: string;
    name: string;
    avatar: string;
  }
  
  // interesting finds
  // 1. time it takes to prepare
  // 2. servings
  // 3. nutrition breakdown - calories, fat, carbs & protein
  // 4. rating
  // 5. calories per serving
  // 6. time breakdown - prep, cooking & total
  // 7. categories it falls under
  
  // TODO
  // 1. take a react router tutorial - authenticated route*
  // 2. clean up this file. Rename things if you have to
  // 3. use the interface to generate data (10 max)
  // 4. create a chef interface & generate 4 dummy chefs
  // 5. look into designs of the home page - nav, bookmarked recipes (public or private) | personal sorted by categories
  
  // 2 sides to the app
  
  // /, /login, /*
  // login
  
  // /, /all-recipes, /profile, /add-recipe, /view-recipe,
  // home, all recipes, profile, add recipe, view recipe