export class Category {
    public categoryId: number;
    public categoryName: string;

    public setCategoryId(categoryId: number) {
        this.categoryId = categoryId;
    }

    public getCategoryId(): number {
        return this.categoryId;
    }

    public setCategoryName(categoryName: string) {
        this.categoryName = categoryName;
    }
}