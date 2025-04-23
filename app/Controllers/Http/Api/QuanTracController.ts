import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { prisma } from "@ioc:Adonis/Addons/Prisma";

export default class QuanTracController {
    async index({request, response}: HttpContextContract) {
        try {
            // Lấy tất cả các bản ghi từ bảng Messages
            const messages = await prisma.messages.findMany();
            console.log(messages);
            return response.status(200).json({
                success: true,
                data: messages,
            });
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        }
    } 
}
