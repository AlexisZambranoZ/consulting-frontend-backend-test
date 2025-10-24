export interface Product {
    pd_id: number;
    pd_name: string;
    pd_description: string;
    pd_image: string;
    pd_unit_price: number;
    pd_quantity: number;
    pd_is_stock: boolean;
    pg_name: string;
    pg_id: number;
    subcategory_name: string;
    subcategory_id: number;
}

export interface ApiResponse {
    data: {
        product: Product;
    }[];
}
