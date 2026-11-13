import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Button className="capitalize mt-8" size="lg">
      add To Cart
    </Button>
  );
};

export default AddToCart;
