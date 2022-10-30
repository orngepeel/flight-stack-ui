import React from "react";
import TinderCard from '@nhoon2002/react-tinder-card';
import Navigation from "../components/navbar";

const data = JSON.parse(`{
    "status": true,
    "message": "Success",
    "timestamp": 1667073318916,
    "data": {
        "session": {
            "searchHash": "0df88879752d78e6d3f650f1e0b9c94a",
            "pageLoadUid": "c4399c5e-f17d-4321-a2fa-8868fa539011",
            "searchId": "eb94425f-6552-4d6a-bdc2-d9981f7189ff.459"
        },
        "complete": false,
        "numOfFilters": 19,
        "totalNumResults": 19,
        "flights": [
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T07:00:00+05:30",
                                "arrivalDateTime": "2022-10-31T09:15:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 864,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "HYD",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T21:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T23:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 839,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1268.0001,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "HYD",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T08:15:00+05:30",
                                "arrivalDateTime": "2022-11-01T09:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320 (sharklets)",
                                "amenities": [],
                                "flightNumber": 616,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 623.77795,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 510
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|13",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 206.97,
                        "totalPricePerPassenger": 206.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|13&area=FLTCenterColumn|0|1|ItinList|2|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=206.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|14",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 270.28,
                        "totalPricePerPassenger": 270.28,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|14&area=FLTCenterColumn|0|1|ItinList|2|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=270.28"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T10:00:00+05:30",
                                "arrivalDateTime": "2022-10-31T12:15:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A321-100/200",
                                "amenities": [],
                                "flightNumber": 809,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "HYD",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T21:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T23:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 839,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1268.0001,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "HYD",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T08:15:00+05:30",
                                "arrivalDateTime": "2022-11-01T09:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320 (sharklets)",
                                "amenities": [],
                                "flightNumber": 616,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 623.77795,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 510
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|8",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 206.97,
                        "totalPricePerPassenger": 206.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|8&area=FLTCenterColumn|0|1|ItinList|3|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=206.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|9",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 270.28,
                        "totalPricePerPassenger": 270.28,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|9&area=FLTCenterColumn|0|1|ItinList|3|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=270.28"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T13:00:00+05:30",
                                "arrivalDateTime": "2022-10-31T15:15:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 677,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "HYD",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T21:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T23:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 839,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1268.0001,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "HYD",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T08:15:00+05:30",
                                "arrivalDateTime": "2022-11-01T09:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320 (sharklets)",
                                "amenities": [],
                                "flightNumber": 616,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 623.77795,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 510
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|29",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 206.97,
                        "totalPricePerPassenger": 206.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|29&area=FLTCenterColumn|0|1|ItinList|4|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=206.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|30",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 270.28,
                        "totalPricePerPassenger": 270.28,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|30&area=FLTCenterColumn|0|1|ItinList|4|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=270.28"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T09:00:00+05:30",
                                "arrivalDateTime": "2022-10-31T11:20:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A321-100/200",
                                "amenities": [],
                                "flightNumber": 866,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "HYD",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T21:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T23:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 839,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1268.0001,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "HYD",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T08:15:00+05:30",
                                "arrivalDateTime": "2022-11-01T09:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320 (sharklets)",
                                "amenities": [],
                                "flightNumber": 616,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 623.77795,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 510
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|22",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 206.97,
                        "totalPricePerPassenger": 206.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|22&area=FLTCenterColumn|0|1|ItinList|6|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=206.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|23",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 270.28,
                        "totalPricePerPassenger": 270.28,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|23&area=FLTCenterColumn|0|1|ItinList|6|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=270.28"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T15:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T17:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 442,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "HYD",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T21:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T23:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 839,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1268.0001,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "HYD",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T08:15:00+05:30",
                                "arrivalDateTime": "2022-11-01T09:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320 (sharklets)",
                                "amenities": [],
                                "flightNumber": 616,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 623.77795,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 510
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|11",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 206.97,
                        "totalPricePerPassenger": 206.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|11&area=FLTCenterColumn|0|1|ItinList|7|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=206.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|12",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 270.28,
                        "totalPricePerPassenger": 270.28,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|12&area=FLTCenterColumn|0|1|ItinList|7|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=270.28"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "IDR",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T07:20:00+05:30",
                                "arrivalDateTime": "2022-10-31T08:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 635,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 506.824,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "IDR",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T09:35:00+05:30",
                                "arrivalDateTime": "2022-10-31T11:10:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 635,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 662.15894,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "NORMAL",
                                "hasStationChange": false,
                                "durationInMinutes": 50
                            }
                        ]
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "HYD",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T21:30:00+05:30",
                                "arrivalDateTime": "2022-10-31T23:45:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 839,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1268.0001,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "HYD",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T08:15:00+05:30",
                                "arrivalDateTime": "2022-11-01T09:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320 (sharklets)",
                                "amenities": [],
                                "flightNumber": 616,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 623.77795,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 510
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|27",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 212.97,
                        "totalPricePerPassenger": 212.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|27&area=FLTCenterColumn|0|1|ItinList|8|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=212.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|28",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 323.89,
                        "totalPricePerPassenger": 323.89,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|28&area=FLTCenterColumn|0|1|ItinList|8|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=323.89"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T06:05:00+05:30",
                                "arrivalDateTime": "2022-10-31T08:20:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 5332,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "GOI",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T19:10:00+05:30",
                                "arrivalDateTime": "2022-10-31T21:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 2263,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1504.3832,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            },
                            {
                                "originStationCode": "GOI",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T23:45:00+05:30",
                                "arrivalDateTime": "2022-11-01T01:00:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A321-100/200",
                                "amenities": [],
                                "flightNumber": 205,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 425.3368,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "NORMAL",
                                "hasStationChange": false,
                                "durationInMinutes": 110
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|2|17",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 222.97,
                        "totalPricePerPassenger": 222.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "BOOKINGFLIGHTS"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    0
                                ]
                            },
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    1
                                ]
                            }
                        ],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|17&area=FLTCenterColumn|0|1|ItinList|9|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=222.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|1|2",
                        "providerId": "Tripmonster",
                        "partnerSuppliedProvider": {
                            "id": "TRIPMONSTER",
                            "displayName": "Tripmonster",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/TRIPMONSTER.png?crop=false&width=166&height=62&fallback=default1.png&_v=dd0bf2e308052a4f2b76c884c6bf45af"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 226.17,
                        "totalPricePerPassenger": 226.17,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "TRIPMONSTER"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    0
                                ]
                            },
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    1
                                ]
                            }
                        ],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|1|2&area=FLTCenterColumn|0|1|ItinList|9|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=226.17"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T14:40:00+05:30",
                                "arrivalDateTime": "2022-10-31T16:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "UK",
                                "operatingCarrierCode": "UK",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 944,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729207,
                                    "code": "UK",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/Vistara.png",
                                    "displayName": "Vistara"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729207,
                                    "code": "UK",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/Vistara.png",
                                    "displayName": "Vistara"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "GOI",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T19:10:00+05:30",
                                "arrivalDateTime": "2022-10-31T21:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 2263,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1504.3832,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            },
                            {
                                "originStationCode": "GOI",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T23:45:00+05:30",
                                "arrivalDateTime": "2022-11-01T01:00:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A321-100/200",
                                "amenities": [],
                                "flightNumber": 205,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 425.3368,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "NORMAL",
                                "hasStationChange": false,
                                "durationInMinutes": 110
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|1|5",
                        "providerId": "Gotogate",
                        "partnerSuppliedProvider": {
                            "id": "GOTOGATE",
                            "displayName": "Gotogate",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/GOTOGATE.png?crop=false&width=166&height=62&fallback=default3.png&_v=a29de71af6666a1a11e42eb0b5f7f84a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 224.97,
                        "totalPricePerPassenger": 224.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "GOTOGATE"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|1|5&area=FLTCenterColumn|0|1|ItinList|10|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=224.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|19",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 227.97,
                        "totalPricePerPassenger": 227.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "BOOKINGFLIGHTS"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|19&area=FLTCenterColumn|0|1|ItinList|10|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=227.97"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T12:25:00+05:30",
                                "arrivalDateTime": "2022-10-31T14:20:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "UK",
                                "operatingCarrierCode": "UK",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 952,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729207,
                                    "code": "UK",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/Vistara.png",
                                    "displayName": "Vistara"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729207,
                                    "code": "UK",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/Vistara.png",
                                    "displayName": "Vistara"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "GOI",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T19:10:00+05:30",
                                "arrivalDateTime": "2022-10-31T21:55:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 2263,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1504.3832,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            },
                            {
                                "originStationCode": "GOI",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T23:45:00+05:30",
                                "arrivalDateTime": "2022-11-01T01:00:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A321-100/200",
                                "amenities": [],
                                "flightNumber": 205,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 425.3368,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "NORMAL",
                                "hasStationChange": false,
                                "durationInMinutes": 110
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|1|1",
                        "providerId": "Gotogate",
                        "partnerSuppliedProvider": {
                            "id": "GOTOGATE",
                            "displayName": "Gotogate",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/GOTOGATE.png?crop=false&width=166&height=62&fallback=default3.png&_v=a29de71af6666a1a11e42eb0b5f7f84a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 230.97,
                        "totalPricePerPassenger": 230.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "GOTOGATE"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|1|1&area=FLTCenterColumn|0|1|ItinList|12|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=230.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|7",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 233.97,
                        "totalPricePerPassenger": 233.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "BOOKINGFLIGHTS"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|7&area=FLTCenterColumn|0|1|ItinList|12|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=233.97"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T07:00:00+05:30",
                                "arrivalDateTime": "2022-10-31T09:15:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 864,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "GOI",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T22:00:00+05:30",
                                "arrivalDateTime": "2022-11-01T00:40:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 883,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1504.3832,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            },
                            {
                                "originStationCode": "GOI",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-11-01T23:10:00+05:30",
                                "arrivalDateTime": "2022-11-02T00:20:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "AI",
                                "operatingCarrierCode": "AI",
                                "equipmentId": "Airbus A320neo",
                                "amenities": [],
                                "flightNumber": 697,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 425.3368,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729004,
                                    "code": "AI",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/AirIndia.png",
                                    "displayName": "Air India"
                                }
                            }
                        ],
                        "layovers": [
                            {
                                "durationType": "LONG",
                                "hasStationChange": false,
                                "durationInMinutes": 1350
                            }
                        ]
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|1|6",
                        "providerId": "SmartFares",
                        "partnerSuppliedProvider": {
                            "id": "LBFTRAVELAIR",
                            "displayName": "SmartFares",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/LBFTRAVELAIR.us.png?crop=false&width=166&height=62&fallback=default2.png&_v=7a60881d7be6896828b11cd402d3b549"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 233.53,
                        "totalPricePerPassenger": 233.53,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|1|6&area=FLTCenterColumn|0|1|ItinList|13|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=233.53"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|20",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 236.97,
                        "totalPricePerPassenger": 236.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|20&area=FLTCenterColumn|0|1|ItinList|13|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=236.97"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|21",
                        "providerId": "Priceline",
                        "partnerSuppliedProvider": {
                            "id": "PRICELINEFLIGHTS",
                            "displayName": "Priceline",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/PRICELINEFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=b3e81884c7678f954cce1ed2c441273a"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 239.78,
                        "totalPricePerPassenger": 239.78,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|21&area=FLTCenterColumn|0|1|ItinList|13|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=239.78"
                    }
                ]
            },
            {
                "segments": [
                    {
                        "legs": [
                            {
                                "originStationCode": "BOM",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "DEL",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T06:05:00+05:30",
                                "arrivalDateTime": "2022-10-31T08:20:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A320-100/200",
                                "amenities": [],
                                "flightNumber": 5332,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            }
                        ],
                        "layovers": []
                    },
                    {
                        "legs": [
                            {
                                "originStationCode": "DEL",
                                "isDifferentOriginStation": false,
                                "destinationStationCode": "BOM",
                                "isDifferentDestinationStation": false,
                                "departureDateTime": "2022-10-31T23:00:00+05:30",
                                "arrivalDateTime": "2022-11-01T01:20:00+05:30",
                                "classOfService": "ECONOMY",
                                "marketingCarrierCode": "6E",
                                "operatingCarrierCode": "6E",
                                "equipmentId": "Airbus A321-100/200",
                                "amenities": [],
                                "flightNumber": 2519,
                                "seatGuruEquipmentId": 0,
                                "seatGuruAirlineUrl": "",
                                "numStops": 0,
                                "distanceInKM": 1138.1091,
                                "isInternational": false,
                                "selfTransfer": false,
                                "operatingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                },
                                "marketingCarrier": {
                                    "locationId": 8729090,
                                    "code": "6E",
                                    "logoUrl": "https://static.tacdn.com/img2/flights/airlines/logos/100x100/IndiGoAirlines.png",
                                    "displayName": "IndiGo"
                                }
                            }
                        ],
                        "layovers": []
                    }
                ],
                "purchaseLinks": [
                    {
                        "purchaseLinkId": "Kayak|1|3",
                        "providerId": "Tripmonster",
                        "partnerSuppliedProvider": {
                            "id": "TRIPMONSTER",
                            "displayName": "Tripmonster",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/TRIPMONSTER.png?crop=false&width=166&height=62&fallback=default1.png&_v=dd0bf2e308052a4f2b76c884c6bf45af"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 234.05,
                        "totalPricePerPassenger": 234.05,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "TRIPMONSTER"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    0
                                ]
                            },
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    1
                                ]
                            }
                        ],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|1|3&area=FLTCenterColumn|0|1|ItinList|14|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=234.05"
                    },
                    {
                        "purchaseLinkId": "Kayak|2|18",
                        "providerId": "Booking.com",
                        "partnerSuppliedProvider": {
                            "id": "BOOKINGFLIGHTS",
                            "displayName": "Booking.com",
                            "logoUrl": "https://content.r9cdn.net/rimg/provider-logos/airlines/h/BOOKINGFLIGHTS.png?crop=false&width=166&height=62&fallback=default3.png&_v=9d698de13331f20432214de1f7f5fab5"
                        },
                        "commerceName": "KayakFlightsMeta",
                        "currency": "USD",
                        "originalCurrency": "USD",
                        "seatAvailability": 0,
                        "taxesAndFees": 0,
                        "taxesAndFeesPerPassenger": 0,
                        "totalPrice": 255.97,
                        "totalPricePerPassenger": 255.97,
                        "fareBasisCodes": [],
                        "containedPurchaseLinks": [],
                        "fareBranding": {
                            "brandId": "Economy",
                            "carrierCode": "BOOKINGFLIGHTS"
                        },
                        "partnerData": {},
                        "isPaid": false,
                        "fareAttributesList": [
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    0
                                ]
                            },
                            {
                                "carryonAllowed": true,
                                "carryonFeeObj": {
                                    "feeType": "KNOWN",
                                    "feeValue": 0
                                },
                                "freeCheckedBagAllowance": 1,
                                "firstCheckedBagFee": 0,
                                "secondCheckedBagFee": -1,
                                "seatSelectionAllowed": true,
                                "seatSelectionFeeObj": {
                                    "feeType": "PRESENT",
                                    "feeValue": -1
                                },
                                "ticketChangeAllowed": false,
                                "ticketChangeFeeObj": {
                                    "feeType": "UNKNOWN",
                                    "feeValue": -1
                                },
                                "segmentIndices": [
                                    1
                                ]
                            }
                        ],
                        "url": "https://www.tripadvisor.com/CheapFlightsPartnerHandoff?searchHash=0df88879752d78e6d3f650f1e0b9c94a&provider=Kayak|2|18&area=FLTCenterColumn|0|1|ItinList|14|Meta_ItineraryPrice&resultsServlet=CheapFlightsSearchResults&handoffPlatform=desktop&impressionId=&totalPricePerPassenger=255.97"
                    }
                ]
            }
        ]
    }
}`)

const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", hour: "numeric", minute: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  export function Swipe (searchParams) {

    
    
    const compareFlights = [];
    
    const saveFlight = (flight) => {
        compareFlights.push(flight)
        console.log(compareFlights)
    };
    
    const swiped = async (direction, flight) => {
        console.log("removing: " + flight.purchaseLinks[0].purchaseLinkId);
        console.log(direction)
        if (direction === 'right') {
            saveFlight(flight)
        }
    };

    const outOfFrame = (flight) => {
        console.log(flight.purchaseLinks[0].purchaseLinkId + " left the screen!");  
    };

  return (
    <div>
        <header>
            <h1 className="title">Flight Stack</h1>
            <Navigation />
        </header>
        <div className='cardContainer'>
            {data.data.flights.map((flight) => (
            <TinderCard
            className='swipe'
            key={flight.purchaseLinks[0].purchaseLinkId}
            onSwipe={(dir) => swiped(dir, flight)}
            onCardLeftScreen={() => outOfFrame(flight)}
            >
                <div
                className='card'
                >
                    <div>
                        <h2>{`Total Price: $${flight.purchaseLinks[0].totalPrice}`}</h2>
                        <h2>{`Price per Passenger: $${flight.purchaseLinks[0].totalPricePerPassenger}`}</h2>
                        <h2 className="date">{`Depart: ${formatDate(flight.segments[0].legs[0].departureDateTime)}`}</h2>
                        <h2 className="date">{`Arrive: ${formatDate(flight.segments[0].legs[flight.segments[0].legs.length - 1].arrivalDateTime)}`}</h2>
                        <img src={flight.segments[0].legs[0].operatingCarrier.logoUrl} alt={`${flight.segments[0].legs[0].operatingCarrier.displayName} logo.`}></img>
                    </div>
                    <div>
                        <h3>{`${flight.segments[0].legs[0].originStationCode} -> ${flight.segments[0].layovers.length} connections -> ${flight.segments[0].legs[flight.segments[0].legs.length - 1].destinationStationCode}`}</h3>
                    </div>
                    {}
                </div>
            </TinderCard>
            ))}
        </div>
        
    </div>
    )
  }

export default Swipe;