import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { prisma } from "@ioc:Adonis/Addons/Prisma";

export default class QuanTracController {
    async indexNode1({request, response}: HttpContextContract) {
        try {
            // Lấy tất cả các bản ghi từ bảng Messages
            const messages = await prisma.messages.findMany(
                {
                    where: {
                        Node: "2",
                        // Timestamp: {
                        //     gte:  new Date(Date.now() - 1 * 60 * 1000), // Lấy dữ liệu trong 24 giờ qua
                        // }
                    },
                }
            );
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
