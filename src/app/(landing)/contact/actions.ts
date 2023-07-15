'use server'
import { headers as Headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

interface actionData {
  username: string,
  subject: string
}

export async function createMessageContact(data: actionData): Promise<boolean> {
  // const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // console.log('IP del cliente:', clientIp);
  try {
    const headers = Headers()
    const ip = headers.get('x-forwarded-for')!.split(/, /)[0] 
    
    const exist = await prisma.messageContact.findUnique({ where: { ipUser: ip}})
    
    if(exist) return Promise.resolve(false)
    
    const { subject, username } = data
    const result = await prisma.messageContact.create({ data: {
      name: username,
      subject,
      ipUser: ip
    }})
    
    console.log(result)
    return Promise.resolve(true)
  } catch (error) {
  return Promise.resolve(false) 
  }
}
