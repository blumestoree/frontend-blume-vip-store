import { IProduct } from '@/src/types/IProduct';
import { url } from '@/src/utils/url';
import ProductInfos from '../sections/product.infos';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

async function getProdutcData(slug: string): Promise<IProduct> {
  const response = await fetch(`${url}/findProduct/${slug}`);
  if (response.status === 404) {
    notFound();
  }
  return response.json();
}

export default async function Product({ params }: Props) {
  const product = await getProdutcData(params.slug);

  return (
    <div>
      <ProductInfos product={product} />
    </div>
  );
}
