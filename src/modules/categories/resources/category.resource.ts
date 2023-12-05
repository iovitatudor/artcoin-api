import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { AvailabilityEnum } from "../enums/availability.enum";
import { LocationEnum } from "../enums/location.enum";

@Injectable()
export class CategoryResource {
  @ApiProperty({ example: 1 })
  public id: number;
  @ApiProperty({ example: "Spaces" })
  public name: string;
  @ApiProperty({ example: "A co-working space located..." })
  public description: string;
  @ApiProperty({ example: "Co-working hub" })
  public destination: string;
  @ApiProperty({ example: AvailabilityEnum.individual })
  public availability: string;
  @ApiProperty({ example: "12" })
  public area: string;
  @ApiProperty({ example: LocationEnum.artCor })
  public location: string;
  @ApiProperty({ example: "Conference room, desk, chair, WC, kettle" })
  public facilities_amenities: string;
  @ApiProperty({ example: "1 working day" })
  public unit_item: string;
  @ApiProperty({ example: 1 })
  public seats_numbers: number;
  @ApiProperty({ example: 10 })
  public price: number;
  @ApiProperty({ example: CategoryResource })
  public children: CategoryResource[] | null;

  public constructor(category) {
    this.id = category.id;
    this.name = category.name;
    this.description = category.description;
    this.availability = category.availability;
    this.destination = category.destination;
    this.area = category.area;
    this.location = category.location;
    this.facilities_amenities = category.facilities_amenities;
    this.unit_item = category.unit_item;
    this.seats_numbers = category.seats_numbers;
    this.price = category.price;
    this.children = category.children ? CategoryResource.collect(category.children) : [];
  }

  public static collect(categories): CategoryResource[] {
    return categories.map((category) => {
      return new CategoryResource(category);
    });
  }
}
