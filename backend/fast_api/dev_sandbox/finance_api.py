from fastapi import APIRouter, Query
import json

finance_router = APIRouter()

# List of asset classes
asset_class_list = ["public-equities",
                    "commodities",
                    "fixed-income",
                    "alternative-investments"]

sector_class_dict = {
    "public-equities": [
        "technology",       # Example sector in Public Equities
        "healthcare",       # Another sector in Public Equities
        # ... more sectors as needed
    ],
    "commodities": [
        "metals",
        "energy",
        "agriculture",
        # ... more commodities as needed
    ],
    "fixed-income": [
        "government-bonds",
        "corporate-bonds",
        "municipal-bonds",
        # ... more types of fixed income as needed
    ],
    "alternative-investments": [
        "real-estate",
        "hedge-funds",
        "private-equity",
        # ... more alternative investments as needed
    ]
}

# Load classification data from JSON
with open('classification.json', 'r', encoding='utf-8') as file:
    sector_class_dict = json.load(file)

# List of asset classes (derived from keys of sector_class_dict)
asset_class_list = list(sector_class_dict.keys())

public_equities_sectors = list(sector_class_dict.keys())


@finance_router.get("/finance")
async def get_finance_data(
    asset_class: str = Query(..., description="The asset class"),
    sector: str = Query(..., description="The sector within the asset class"),
    # sub_category: str = Query(None, description="Sub-category within the sector"),
    # metric: str = Query(None, description="Specific metric to retrieve"),
    # date_range: str = Query(None, description="Date range for the data")
):
    # Logic to dynamically build and execute the query
    if asset_class not in asset_class_list:
        return{"Error": "Invalid asset class. Please choose from asset class list. Please see documenation for full range of support asset class"}
    if sector not in sector_class_dict[asset_class]:
        return{"Error": "Invalid sector class. Please choose from sectors list. Please see documenation for full range of support sectors"}
    return {"data": f"Requested financial data based on parameters {asset_class}/{sector}"}

@finance_router.get("/finance/public-equities")
async def public_equities_request(
    public_equities_sector_query: str = Query(..., description="The sector within the asset class"),
    # sub_category: str = Query(None, description="Sub-category within the sector"),
):
    if public_equities_sector_query not in public_equities_sectors:
        if public_equities_sector_query == "list":
            return {"List of sectors": public_equities_sectors}
        else:
            return{"Error": "Invalid sector class. Please choose from sectors list. Please see documenation for full range of support sectors"}
    return {"data": f"Requested financial data based on parameters public-equities/{public_equities_sector_query}"}


