import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent
} from "typeorm";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AvailabilityEnum } from "../enums/availability.enum";
import { LocationEnum } from "../enums/location.enum";
import { UnitItemEnum } from "../enums/unitItem.enum";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "uuid" })
  parentId: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;

  @Column({ type: "varchar", length: 30 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "varchar", length: 100 })
  destination: string;

  @Column({
    type: "varchar",
    length: 100,
    default: AvailabilityEnum.individual
  })
  availability: AvailabilityEnum;

  @Column({ type: "varchar", length: 100, default: 0 })
  area: string;

  @Column({ type: "varchar", length: 100, default: LocationEnum.artCor })
  location: LocationEnum;

  @Column({ type: "varchar", length: 100, nullable: true })
  facilities_amenities: string;

  @Column({ type: "varchar", length: 100, default: UnitItemEnum.oneHour })
  unit_item: UnitItemEnum;

  @Column({ type: "integer", default: 0 })
  seats_numbers: number;

  @Column({ type: "integer", default: 0 })
  price: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)"
  })
  public updated_at: Date;
}
