import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter();
    const {slug} = router.query;

    return <p>Product: {slug}</p>
}

export default ProductDetail;