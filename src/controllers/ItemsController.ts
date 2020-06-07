import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const itemsWithImageUrl = items.map((item) => {
      item.image_url = `api/uploads/${item.image}`;
      return item;
    });

    response.json(itemsWithImageUrl);
  }
}

export default ItemsController;
