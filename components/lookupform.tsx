"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const formSchema = z.object({
  appname: z
    .string()
    .min(1, "App name must be at least 1 character")
    .max(255, "App name is too long"),
  country: z.enum([
    "AF",
    "AX",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BQ",
    "BA",
    "BW",
    "BV",
    "BR",
    "IO",
    "BN",
    "BG",
    "BF",
    "BI",
    "KH",
    "CM",
    "CA",
    "CV",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CX",
    "CC",
    "CO",
    "KM",
    "CG",
    "CD",
    "CK",
    "CR",
    "CI",
    "HR",
    "CU",
    "CW",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "ET",
    "FK",
    "FO",
    "FJ",
    "FI",
    "FR",
    "GF",
    "PF",
    "TF",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GG",
    "GN",
    "GW",
    "GY",
    "HT",
    "HM",
    "VA",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IM",
    "IL",
    "IT",
    "JM",
    "JP",
    "JE",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MK",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MS",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NC",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "MP",
    "NO",
    "OM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "BL",
    "SH",
    "KN",
    "LC",
    "MF",
    "PM",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SX",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "GS",
    "SS",
    "ES",
    "LK",
    "SD",
    "SR",
    "SJ",
    "SZ",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TC",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "US",
    "UM",
    "UY",
    "UZ",
    "VU",
    "VE",
    "VN",
    "VG",
    "VI",
    "WF",
    "EH",
    "YE",
    "ZM",
    "ZW",
  ]),
});

const countries = [
  { code: "AF", country: "Afghanistan" },
  { code: "AX", country: "Åland Islands" },
  { code: "AL", country: "Albania" },
  { code: "DZ", country: "Algeria" },
  { code: "AS", country: "American Samoa" },
  { code: "AD", country: "Andorra" },
  { code: "AO", country: "Angola" },
  { code: "AI", country: "Anguilla" },
  { code: "AQ", country: "Antarctica" },
  { code: "AG", country: "Antigua and Barbuda" },
  { code: "AR", country: "Argentina" },
  { code: "AM", country: "Armenia" },
  { code: "AW", country: "Aruba" },
  { code: "AU", country: "Australia" },
  { code: "AT", country: "Austria" },
  { code: "AZ", country: "Azerbaijan" },
  { code: "BS", country: "Bahamas" },
  { code: "BH", country: "Bahrain" },
  { code: "BD", country: "Bangladesh" },
  { code: "BB", country: "Barbados" },
  { code: "BY", country: "Belarus" },
  { code: "BE", country: "Belgium" },
  { code: "BZ", country: "Belize" },
  { code: "BJ", country: "Benin" },
  { code: "BM", country: "Bermuda" },
  { code: "BT", country: "Bhutan" },
  { code: "BO", country: "Bolivia" },
  { code: "BQ", country: "Bonaire" },
  { code: "BA", country: "Bosnia and Herzegovina" },
  { code: "BW", country: "Botswana" },
  { code: "BV", country: "Bouvet Island" },
  { code: "BR", country: "Brazil" },
  { code: "IO", country: "British Indian Ocean Territory" },
  { code: "BN", country: "Brunei Darussalam" },
  { code: "BG", country: "Bulgaria" },
  { code: "BF", country: "Burkina Faso" },
  { code: "BI", country: "Burundi" },
  { code: "KH", country: "Cambodia" },
  { code: "CM", country: "Cameroon" },
  { code: "CA", country: "Canada" },
  { code: "CV", country: "Cape Verde" },
  { code: "KY", country: "Cayman Islands" },
  { code: "CF", country: "Central African Republic" },
  { code: "TD", country: "Chad" },
  { code: "CL", country: "Chile" },
  { code: "CN", country: "China" },
  { code: "CX", country: "Christmas Island" },
  { code: "CC", country: "Cocos (Keeling) Islands" },
  { code: "CO", country: "Colombia" },
  { code: "KM", country: "Comoros" },
  { code: "CG", country: "Congo" },
  { code: "CD", country: "Congo" },
  { code: "CK", country: "Cook Islands" },
  { code: "CR", country: "Costa Rica" },
  { code: "CI", country: "Côte d'Ivoire" },
  { code: "HR", country: "Croatia" },
  { code: "CU", country: "Cuba" },
  { code: "CW", country: "Curaçao" },
  { code: "CY", country: "Cyprus" },
  { code: "CZ", country: "Czech Republic" },
  { code: "DK", country: "Denmark" },
  { code: "DJ", country: "Djibouti" },
  { code: "DM", country: "Dominica" },
  { code: "DO", country: "Dominican Republic" },
  { code: "EC", country: "Ecuador" },
  { code: "EG", country: "Egypt" },
  { code: "SV", country: "El Salvador" },
  { code: "GQ", country: "Equatorial Guinea" },
  { code: "ER", country: "Eritrea" },
  { code: "EE", country: "Estonia" },
  { code: "ET", country: "Ethiopia" },
  { code: "FK", country: "Falkland Islands (Malvinas)" },
  { code: "FO", country: "Faroe Islands" },
  { code: "FJ", country: "Fiji" },
  { code: "FI", country: "Finland" },
  { code: "FR", country: "France" },
  { code: "GF", country: "French Guiana" },
  { code: "PF", country: "French Polynesia" },
  { code: "TF", country: "French Southern Territories" },
  { code: "GA", country: "Gabon" },
  { code: "GM", country: "Gambia" },
  { code: "GE", country: "Georgia" },
  { code: "DE", country: "Germany" },
  { code: "GH", country: "Ghana" },
  { code: "GI", country: "Gibraltar" },
  { code: "GR", country: "Greece" },
  { code: "GL", country: "Greenland" },
  { code: "GD", country: "Grenada" },
  { code: "GP", country: "Guadeloupe" },
  { code: "GU", country: "Guam" },
  { code: "GT", country: "Guatemala" },
  { code: "GG", country: "Guernsey" },
  { code: "GN", country: "Guinea" },
  { code: "GW", country: "Guinea-Bissau" },
  { code: "GY", country: "Guyana" },
  { code: "HT", country: "Haiti" },
  { code: "HM", country: "Heard Island and McDonald Islands" },
  { code: "VA", country: "Holy See (Vatican City State)" },
  { code: "HN", country: "Honduras" },
  { code: "HK", country: "Hong Kong" },
  { code: "HU", country: "Hungary" },
  { code: "IS", country: "Iceland" },
  { code: "IN", country: "India" },
  { code: "ID", country: "Indonesia" },
  { code: "IR", country: "Iran" },
  { code: "IQ", country: "Iraq" },
  { code: "IE", country: "Ireland" },
  { code: "IM", country: "Isle of Man" },
  { code: "IL", country: "Israel" },
  { code: "IT", country: "Italy" },
  { code: "JM", country: "Jamaica" },
  { code: "JP", country: "Japan" },
  { code: "JE", country: "Jersey" },
  { code: "JO", country: "Jordan" },
  { code: "KZ", country: "Kazakhstan" },
  { code: "KE", country: "Kenya" },
  { code: "KI", country: "Kiribati" },
  { code: "KP", country: "Korea" },
  { code: "KR", country: "Korea" },
  { code: "KW", country: "Kuwait" },
  { code: "KG", country: "Kyrgyzstan" },
  { code: "LA", country: "Lao People's Democratic Republic" },
  { code: "LV", country: "Latvia" },
  { code: "LB", country: "Lebanon" },
  { code: "LS", country: "Lesotho" },
  { code: "LR", country: "Liberia" },
  { code: "LY", country: "Libya" },
  { code: "LI", country: "Liechtenstein" },
  { code: "LT", country: "Lithuania" },
  { code: "LU", country: "Luxembourg" },
  { code: "MO", country: "Macao" },
  { code: "MK", country: "Macedonia" },
  { code: "MG", country: "Madagascar" },
  { code: "MW", country: "Malawi" },
  { code: "MY", country: "Malaysia" },
  { code: "MV", country: "Maldives" },
  { code: "ML", country: "Mali" },
  { code: "MT", country: "Malta" },
  { code: "MH", country: "Marshall Islands" },
  { code: "MQ", country: "Martinique" },
  { code: "MR", country: "Mauritania" },
  { code: "MU", country: "Mauritius" },
  { code: "YT", country: "Mayotte" },
  { code: "MX", country: "Mexico" },
  { code: "FM", country: "Micronesia" },
  { code: "MD", country: "Moldova" },
  { code: "MC", country: "Monaco" },
  { code: "MN", country: "Mongolia" },
  { code: "ME", country: "Montenegro" },
  { code: "MS", country: "Montserrat" },
  { code: "MA", country: "Morocco" },
  { code: "MZ", country: "Mozambique" },
  { code: "MM", country: "Myanmar" },
  { code: "NA", country: "Namibia" },
  { code: "NR", country: "Nauru" },
  { code: "NP", country: "Nepal" },
  { code: "NL", country: "Netherlands" },
  { code: "NC", country: "New Caledonia" },
  { code: "NZ", country: "New Zealand" },
  { code: "NI", country: "Nicaragua" },
  { code: "NE", country: "Niger" },
  { code: "NG", country: "Nigeria" },
  { code: "NU", country: "Niue" },
  { code: "NF", country: "Norfolk Island" },
  { code: "MP", country: "Northern Mariana Islands" },
  { code: "NO", country: "Norway" },
  { code: "OM", country: "Oman" },
  { code: "PK", country: "Pakistan" },
  { code: "PW", country: "Palau" },
  { code: "PS", country: "Palestine" },
  { code: "PA", country: "Panama" },
  { code: "PG", country: "Papua New Guinea" },
  { code: "PY", country: "Paraguay" },
  { code: "PE", country: "Peru" },
  { code: "PH", country: "Philippines" },
  { code: "PN", country: "Pitcairn" },
  { code: "PL", country: "Poland" },
  { code: "PT", country: "Portugal" },
  { code: "PR", country: "Puerto Rico" },
  { code: "QA", country: "Qatar" },
  { code: "RE", country: "Réunion" },
  { code: "RO", country: "Romania" },
  { code: "RU", country: "Russian Federation" },
  { code: "RW", country: "Rwanda" },
  { code: "BL", country: "Saint Barthélemy" },
  { code: "SH", country: "Saint Helena" },
  { code: "KN", country: "Saint Kitts and Nevis" },
  { code: "LC", country: "Saint Lucia" },
  { code: "MF", country: "Saint Martin (French part)" },
  { code: "PM", country: "Saint Pierre and Miquelon" },
  { code: "VC", country: "Saint Vincent and the Grenadines" },
  { code: "WS", country: "Samoa" },
  { code: "SM", country: "San Marino" },
  { code: "ST", country: "Sao Tome and Principe" },
  { code: "SA", country: "Saudi Arabia" },
  { code: "SN", country: "Senegal" },
  { code: "RS", country: "Serbia" },
  { code: "SC", country: "Seychelles" },
  { code: "SL", country: "Sierra Leone" },
  { code: "SG", country: "Singapore" },
  { code: "SX", country: "Sint Maarten (Dutch part)" },
  { code: "SK", country: "Slovakia" },
  { code: "SI", country: "Slovenia" },
  { code: "SB", country: "Solomon Islands" },
  { code: "SO", country: "Somalia" },
  { code: "ZA", country: "South Africa" },
  { code: "GS", country: "South Georgia and the South Sandwich Islands" },
  { code: "SS", country: "South Sudan" },
  { code: "ES", country: "Spain" },
  { code: "LK", country: "Sri Lanka" },
  { code: "SD", country: "Sudan" },
  { code: "SR", country: "Suriname" },
  { code: "SJ", country: "Svalbard and Jan Mayen" },
  { code: "SZ", country: "Swaziland" },
  { code: "SE", country: "Sweden" },
  { code: "CH", country: "Switzerland" },
  { code: "SY", country: "Syrian Arab Republic" },
  { code: "TW", country: "Taiwan" },
  { code: "TJ", country: "Tajikistan" },
  { code: "TZ", country: "Tanzania" },
  { code: "TH", country: "Thailand" },
  { code: "TL", country: "Timor-Leste" },
  { code: "TG", country: "Togo" },
  { code: "TK", country: "Tokelau" },
  { code: "TO", country: "Tonga" },
  { code: "TT", country: "Trinidad and Tobago" },
  { code: "TN", country: "Tunisia" },
  { code: "TR", country: "Turkey" },
  { code: "TM", country: "Turkmenistan" },
  { code: "TC", country: "Turks and Caicos Islands" },
  { code: "TV", country: "Tuvalu" },
  { code: "UG", country: "Uganda" },
  { code: "UA", country: "Ukraine" },
  { code: "AE", country: "United Arab Emirates" },
  { code: "GB", country: "United Kingdom" },
  { code: "US", country: "United States" },
  { code: "UM", country: "United States Minor Outlying Islands" },
  { code: "UY", country: "Uruguay" },
  { code: "UZ", country: "Uzbekistan" },
  { code: "VU", country: "Vanuatu" },
  { code: "VE", country: "Venezuela" },
  { code: "VN", country: "Viet Nam" },
  { code: "VG", country: "Virgin Islands" },
  { code: "VI", country: "Virgin Islands" },
  { code: "WF", country: "Wallis and Futuna" },
  { code: "EH", country: "Western Sahara" },
  { code: "YE", country: "Yemen" },
  { code: "ZM", country: "Zambia" },
  { code: "ZW", country: "Zimbabwe" },
];

export default function LookupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appname: "",
      country: "US",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const response = await fetch(
      `https://itunes.apple.com/search?limit=10&media=software&term=${data.appname}&country=${data.country}&lang=en-us`
    );

    console.log(await response.json());
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => await onSubmit(data))}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="appname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appname</FormLabel>
              <FormControl>
                <Input placeholder="Netflix" {...field} />
              </FormControl>
              <FormDescription>
                Enter the app name to find it&apos;s bundle id.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup {...field}>
                      <SelectLabel>Countries</SelectLabel>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.country}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Select the country to search in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button size="lg" type="submit" variant="outline">
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
}
