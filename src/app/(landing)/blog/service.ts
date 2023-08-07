import fs from 'fs'
import { Article, MetaData } from './interface/';
import path from 'path'

const blogDir = path.join(process.cwd(), 'public', 'articles')

export const getBlogs = (): Article[] => { 
  const articles: Article[] = fs.readdirSync(blogDir).map(file => {
    return {
      link: file.split('.').shift() || '',
      name: file.replace(/-/g, ' '),
      meta:  readBlog(path.join(blogDir, file)) || ''
    }
  })
  return articles
}


const readBlog = (file: string): MetaData => {
  try {
    const data = fs.readFileSync(file, 'utf8').split('---')[1]
    const json = JSON.parse(data) as MetaData
    return json
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    return {
      title: '',
      description: ''
    };
  }
};

