from fastapi import FastAPI, HTTPException, Path, Query
from typing import List, Optional
from pydantic import BaseModel

from finance_api import finance_router

app = FastAPI()

@app.get("/")
async def main_file():
    return {"Hello": "World!"}

app.include_router(finance_router)
