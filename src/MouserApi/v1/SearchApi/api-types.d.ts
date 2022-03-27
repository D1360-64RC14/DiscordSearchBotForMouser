export declare type BasicOptions = {
    apiKey: string;
};

export declare type KeywordSearchOptions = BasicOptions & {
    keyword: string;
    records?: number;
    startingRecord?: number;
    searchOptions?: 'None' | 'Rohs' | 'InStock' | 'RohsAndInStock';
    searchWithYourSignUpLanguage?: boolean;
};

export declare type PartnumberSearchOptions = BasicOptions & {
    mouserPartNumber: string;
    partSearchOptions?: 'None' | 'Exact' | 'BeginsWith';
};

export declare type ErrorEntity = {
    Id: number;
    Code: string;
    Message: string;
    ResourceKey: string;
    ResourceFormatString: string;
    ResourceFormatString2: string;
    PropertyName: string;
};

export declare type ProductAttribute = {
    AttributeName: string;
    AttributeValue: string;
};

export declare type PriceBreak = {
    Quantity: number;
    Price: string;
    Currency: string;
};

export declare type AlternatePackaging = {
    APMfrPN: string;
};

export declare type UnitWeightKg = {
    UnitWeight: number;
};

export declare type StandardCost = {
    Standardcost: number;
};

export declare type ProductCompliance = {
    ComplianceName: string;
    ComplianceValue: string;
};

export declare type MouserPart = {
    Availability: string;
    DataSheetUrl: string;
    Description: string;
    FactoryStock: string;
    ImagePath: string;
    Category: string;
    LeadTime: string;
    LifecycleStatus: string;
    Manufacturer: string;
    ManufacturerPartNumber: string;
    Min: string;
    Mult: string;
    MouserPartNumber: string;
    ProductAttributes: ProductAttribute[];
    PriceBreaks: PriceBreak[];
    AlternatePackagings: AlternatePackaging[];
    ProductDetailUrl: string;
    Reeling: boolean;
    ROHSStatus: string;
    SuggestedReplacement: string;
    MultiSimBlue: number;
    UnitWeightKg: UnitWeightKg[];
    StandardCost: StandardCost[];
    IsDiscontinued: string;
    RTM: string;
    MouserProductCategory: string;
    IPCCode: string;
    SField: string;
    VNum: string;
    ActualMfrName: string;
    AvailableOnOrder: string;
    InfoMessages: string[];
    SalesMaximumOrderQty: string;
    RestrictionMessage: string;
    PID: string;
    ProductCompliance: ProductCompliance[];
};

export declare type SearchResponse = {
    NumberOfResult: number;
    Parts: MouserPart[];
};

export declare type SearchResponseRoot = {
    Errors: ErrorEntity[];
    SearchResults: SearchResponse;
};
