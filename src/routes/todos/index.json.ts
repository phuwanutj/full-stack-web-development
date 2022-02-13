// import type { RequestHandler } from "@sveltejs/kit";

// export const get: RequestHandler = () => {
//   return {
//       status: 200,
//       body: "Hello test"
//   }
// }

// export const post: RequestHandler = async (request) => {
//     console.log(request.body.get("text"))

//     return {
//         status: 200
//         body: request.body.get("text")
//     }
// }

import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

// get
export const get: RequestHandler = async ({ request }) => {
  return {
    status: 200,
    body: todos
  }
}

// post
export const post: RequestHandler = async ({ request }) => {
  const data = await request.formData();

  todos.push({
    created_at: new Date(),
    text: data.get('text') as string,
    done: false
  })

  return {
    status: 303,
    headers: {
      location: "/"
    }
  }
} 