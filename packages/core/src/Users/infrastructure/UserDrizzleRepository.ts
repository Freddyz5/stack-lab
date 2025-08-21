import { db, users, eq } from 'client-db'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { Nullable } from '../../shared/domain/value-object/Nullable'
import { UserEmail } from '../domain/UserEmail'
import { UserId } from '../domain/UserId'

export class UserDrizzleRepository implements UserRepository  {
  
  protected table: typeof users = users;

  async save(user: User): Promise<void> {
    const currentUser = await db
      .select()
      .from(users)
      .where(eq(users.id, user.id.value))

    if (currentUser.length !== 0) {
      await db
        .update(users)
        .set({
          ...user.toPrimitives(),
          modifiedAt: new Date(),
        })
        .where(eq(users.id, user.id.value))

      console.log('User updated! 👥')
    } else {
      await db
        .insert(users).values({
          ...user.toPrimitives(),
          modifiedAt: new Date(),
        });
      
      console.log('New user created! 👤')
    }
    
    return Promise.resolve();
  }

  async search(id: UserId): Promise<Nullable<User>> {
    const currentUser = await db
      .select()
      .from(users)
      .where(eq(users.id, id.value))
    
    return User.fromPrimitives({
      ...currentUser[0],
    });
  }

  async searchAll(): Promise<User[]> {
    const currentUsers = await db
      .select()
      .from(users)
      .where(eq(users.isActive, true))
    
    return currentUsers.map((user) => User.fromPrimitives({
      ...user,
    }));
  }
  
  async delete(id: UserId): Promise<void> {
    await db
      .update(users)
      .set({
        isActive: false,
        modifiedAt: new Date(),
      })
      .where(eq(users.id, id.value))
      
    console.log('User deleted! ❌')
  }

  async findByEmail(email: UserEmail): Promise<Nullable<User>> {
    const result = await db.query.users.findFirst({
      where: eq(users.email, email.value)
    });

    if (!result) return null;

    return User.fromPrimitives({
      ...result,
    });
  }
}
