'use server'
import { headers as Headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

interface actionData {
  username: string,
  subject: string
}

export async function createMessageContact(data: actionData): Promise<boolean> {
  try {
    const headers = Headers();
    const ip = headers.get('x-forwarded-for')!.split(/, /)[0];

    // Obtenemos la fecha actual
    const today = new Date();
    // Reducimos la fecha a medianoche para comparar solo el día
    today.setHours(0, 0, 0, 0);

    // Consultamos si existe un mensaje con el mismo ipUser y el mismo día
    const exist = await prisma.messageContact.findFirst({
      where: {
        ipUser: ip,
        day: {
          gte: today, // Verificar si la fecha del mensaje es igual o posterior a "today"
        },
      },
    });

    if (exist) return Promise.resolve(false);

    const { subject, username } = data;
    const result = await prisma.messageContact.create({
      data: {
        name: username,
        subject,
        ipUser: ip,
      },
    });

    console.log(result);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}
