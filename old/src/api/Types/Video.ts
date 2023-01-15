import {Upload} from "@/api/Types/Upload";

export interface Video   {
    data?: {
        id?: string;
        attributes?: {
            file?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    firstname?: string;
                                    lastname?: string;
                                    username?: string;
                                    email?: string;
                                    resetPasswordToken?: string;
                                    registrationToken?: string;
                                    isActive?: boolean;
                                    roles?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                code?: string;
                                                description?: string;
                                                users?: { data?: { id?: string; attributes?: object }[] };
                                                permissions?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            action?: string;
                                                            subject?: string;
                                                            properties?: any;
                                                            conditions?: any;
                                                            role?: { data?: { id?: string; attributes?: object } };
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                                        };
                                                    }[];
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: { data?: { id?: string; attributes?: object } };
                                                updatedBy?: { data?: { id?: string; attributes?: object } };
                                            };
                                        }[];
                                    };
                                    blocked?: boolean;
                                    preferedLanguage?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                            };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                };
            };
            rotations?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        broadcastDates?: { id?: string; startTime?: string }[];
                        standardBroadcastDates?: {
                            id?: string;
                            Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                            Tijd?: string;
                        }[];
                        videos?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    file?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                alternativeText?: string;
                                                caption?: string;
                                                width?: number;
                                                height?: number;
                                                formats?: any;
                                                hash?: string;
                                                ext?: string;
                                                mime?: string;
                                                size?: number;
                                                url?: string;
                                                previewUrl?: string;
                                                provider?: string;
                                                provider_metadata?: any;
                                                related?: { data?: { id?: string; attributes?: object }[] };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            firstname?: string;
                                                            lastname?: string;
                                                            username?: string;
                                                            email?: string;
                                                            resetPasswordToken?: string;
                                                            registrationToken?: string;
                                                            isActive?: boolean;
                                                            roles?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        name?: string;
                                                                        code?: string;
                                                                        description?: string;
                                                                        users?: { data?: { id?: string; attributes?: object }[] };
                                                                        permissions?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {
                                                                                    action?: string;
                                                                                    subject?: string;
                                                                                    properties?: any;
                                                                                    conditions?: any;
                                                                                    role?: { data?: { id?: string; attributes?: object } };
                                                                                    createdAt?: string;
                                                                                    updatedAt?: string;
                                                                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                                                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                                                                };
                                                                            }[];
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                                                    };
                                                                }[];
                                                            };
                                                            blocked?: boolean;
                                                            preferedLanguage?: string;
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                                        };
                                                    };
                                                };
                                                updatedBy?: { data?: { id?: string; attributes?: object } };
                                            };
                                        };
                                    };
                                    rotations?: { data?: { id?: string; attributes?: object }[] };
                                    name?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                firstname?: string;
                                                lastname?: string;
                                                username?: string;
                                                email?: string;
                                                resetPasswordToken?: string;
                                                registrationToken?: string;
                                                isActive?: boolean;
                                                roles?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            name?: string;
                                                            code?: string;
                                                            description?: string;
                                                            users?: { data?: { id?: string; attributes?: object }[] };
                                                            permissions?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        action?: string;
                                                                        subject?: string;
                                                                        properties?: any;
                                                                        conditions?: any;
                                                                        role?: { data?: { id?: string; attributes?: object } };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                                                    };
                                                                }[];
                                                            };
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                                        };
                                                    }[];
                                                };
                                                blocked?: boolean;
                                                preferedLanguage?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: { data?: { id?: string; attributes?: object } };
                                                updatedBy?: { data?: { id?: string; attributes?: object } };
                                            };
                                        };
                                    };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                            }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        publishedAt?: string;
                        createdBy?: { data?: { id?: string; attributes?: object } };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                }[];
            };
            name?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: { data?: { id?: string; attributes?: object } };
            updatedBy?: { data?: { id?: string; attributes?: object } };
        };
    }[];
    meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
}