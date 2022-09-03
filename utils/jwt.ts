import jwt from "jsonwebtoken";

export const signToken = (_id: string, email: string) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay semilla de JWT - Revisar variables de entorno");
  }

  return jwt.sign(
    // payload
    { _id, email },

    // Seed
    process.env.JWT_SECRET_SEED,

    // Opciones
    { expiresIn: "30d" }
  );
};

export const isValidToken = (token: string): Promise<string> => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay semilla de JWt");
  }
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(
        token,
        process.env.JWT_SECRET_SEED || "",
        (err, paylopad) => {
            if(err) return reject('Jwt no valido')
            const {_id} = paylopad as {_id:string}

            resolve(_id)
        }
      );
    } catch (error) {
        reject('Jwt no valido')
    }
  });
};
