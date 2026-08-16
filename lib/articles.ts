import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import type { ArticleItem } from "../types";

const articlesDirectory = path.join(process.cwd(), "articles");
export const getSortedArticles = (articles: ArticleItem[]) => {
    const fileNames = fs.readdirSync(articlesDirectory);

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        };
    });

    return allArticlesData.sort((a, b) => {
        const dateA = moment(a.date, ["MM/DD/YYYY", "DD-MM-YYYY"], true);
        const dateB = moment(b.date, ["MM/DD/YYYY", "DD-MM-YYYY"], true);

        if (dateA.isBefore(dateB)) {
            return -1;
        } else if (dateB.isAfter(dateA)) {
            return 1;
        }
        return 0;
    });
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles([]);
    const categorisedArticles: Record<string, ArticleItem[]> = {};

    sortedArticles.forEach(article => {
        if (!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = [];
        }
        categorisedArticles[article.category].push(article);
    }
    )

    return categorisedArticles;
}

export const getArticleData = async (id?: string) => {
    if (!id) {
        return null;
    }

    const fullPath = path.join(articlesDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const articleDate = moment(matterResult.data.date, ["MM/DD/YYYY", "DD-MM-YYYY"], true);

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: articleDate.isValid() ? articleDate.format("DD MMMM YYYY") : "Unknown date",
    };
}