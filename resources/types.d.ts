import { FieldOptions } from "./options";
import { Padding } from "../../shares/elements";
/**
 * A point type represent x and y axis coordinate.
 */
export interface Point {
    x: number;
    y: number;
}
/**
 * A rectange box the represent an area in SVG space.
 */
export declare class Box {
    private axisX;
    private axisY;
    private sWidth;
    private sHeight;
    private isEditable;
    constructor(svgRect?: SVGRect);
    /**
     * Editable return a new edibitable box object if the object is the a readonly object
     * otherwise it will return self object instead.
     */
    editable(): Box;
    /**
     * Accumulate 2d area dimension and it's coordinate. When `dimensionOnly` set to true, the function
     * perform the action on dimension only and ignore any axis coordination value in otherword function assume
     * that both `Box` has the same start x,y axis coordinate and it's coordinate value will set to 0 regardless
     * of existing value of both `Box`. By default, `dimensionOnly` is set to false.
     * @param padding padding to be extent the 2d bounding box
     * @param dimensionOnly whether or not extend will perform without considering the axis coordinate.
     */
    extend(other: Box | SVGRect, dimensionOnly?: boolean): Box;
    /**
     * Extent the 2d area dimension and it's coordinate based on the given `padding`.
     * The function perform extent dimension width and height to left and bottom where
     * coordinate x, y is reduce by `padding` left and right. When `dimensionOnly`
     * set to true, the function perform the extent only on dimension but not coordinate.
     * By default, `dimensionOnly` is set to false.
     * @param padding padding to be extent the 2d bounding box
     * @param dimensionOnly whether or not extend will perform without considering the axis coordinate.
     */
    padding(padding: Padding, dimensionOnly?: boolean): Box;
    /** Get x axis of the box */
    /** Set x axis to the box. An exception is raise if the box is a readonly box. */
    x: number;
    /** Get y axis of the box */
    /** Set y axis to the box. An exception is raise if the box is a readonly box. */
    y: number;
    /** Get width of the box */
    /** Set width to the box. An exception is raise if the box is a readonly box. */
    width: number;
    /** Get height of the box */
    /** Set height to the box. An exception is raise if the box is a readonly box. */
    height: number;
    private initialize;
    private raiseNonEditableBox;
}
/**
 * Type alias which represent length type value in SVG space.
 */
export declare type LengthNumericType = number | LengthType;
/**
 * Type alias which represent length value in SVG space.
 */
export declare type LengthType = "string";
/**
 * Type represent size of the object.
 */
export interface Size {
    width: number;
    height: number;
}
/**
 * Object represent field axis coordinate left and right relative SVG root coordinate.
 */
export interface FieldCoordinate {
    left: Point;
    right: Point;
}
/**
 * A table information which include name and all field information of the table.
 */
export interface TableMetadata {
    name: string;
    engine?: string;
    additional?: string;
    fields?: FieldOptions[];
}
/**
 * The number represent SQL database data type. Some of the data type may not applicatable or suitable
 * to be used in certain database engine.
 */
export declare enum DataType {
    Number = 1,
    Bit = 2,
    TinyInt = 3,
    SmallInt = 4,
    Int = 5,
    BigInt = 6,
    Decimal = 7,
    Numeric = 8,
    Float = 9,
    Real = 10,
    Double = 11,
    String = 12,
    Char = 13,
    VarChar = 14,
    Text = 15,
    DateTime = 16,
    Date = 17,
    Time = 18,
    TimeStamp = 19,
    Year = 20,
    Enum = 21,
    Binary = 22,
    VarBinary = 23,
    Image = 24,
    Miscellaneous = 25,
    Clob = 26,
    Blob = 27,
    XML = 28,
    Json = 29
}
