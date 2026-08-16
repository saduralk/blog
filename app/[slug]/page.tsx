import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation";
import { getArticleData, getSortedArticles } from "@/lib/articles";

export async function generateStaticParams() {
    return getSortedArticles([]).map((article) => ({ slug: article.id }));
}

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    const articleData = await getArticleData(slug);

    if (!articleData) {
        notFound();
    }

    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link href="/" className="flex items-center gap-2">
                    <ArrowLeftIcon width={20} />
                    <span>Back to Articles</span>
                </Link>
            </div>{articleData.date.toString()}
            <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </section>
    )
}

export default Article