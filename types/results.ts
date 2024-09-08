export interface Results {
    resultCount: number;
    results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  screenshotUrls?: (string)[] | null;
  ipadScreenshotUrls?: (string | null)[] | null;
  appletvScreenshotUrls?: (null)[] | null;
  artworkUrl512: string;
  supportedDevices?: (string)[] | null;
  isGameCenterEnabled: boolean;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  features?: (string | null)[] | null;
  advisories?: (string)[] | null;
  kind: string;
  languageCodesISO2A?: (string)[] | null;
  averageUserRatingForCurrentVersion: number;
  fileSizeBytes: string;
  sellerUrl?: string | null;
  formattedPrice: string;
  userRatingCountForCurrentVersion: number;
  trackContentRating: string;
  currentVersionReleaseDate: string;
  averageUserRating: number;
  trackCensoredName: string;
  trackViewUrl: string;
  contentAdvisoryRating: string;
  artistId: number;
  artistName: string;
  genres?: (string)[] | null;
  price: number;
  description: string;
  genreIds?: (string)[] | null;
  bundleId: string;
  trackId: number;
  trackName: string;
  releaseDate: string;
  releaseNotes: string;
  sellerName: string;
  minimumOsVersion: string;
  primaryGenreName: string;
  primaryGenreId: number;
  currency: string;
  version: string;
  wrapperType: string;
  isVppDeviceBasedLicensingEnabled: boolean;
  userRatingCount: number;
}
  