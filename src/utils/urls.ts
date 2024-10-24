export interface UrlState {
    urls: { original: string; shortened: string }[];
    isLoading: boolean;
    error: string | null;
  }