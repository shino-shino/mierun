export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          id: string
          profile: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          id: string
          profile?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          profile?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      picture: {
        Row: {
          id: number
          picture: string
        }
        Insert: {
          id?: never
          picture: string
        }
        Update: {
          id?: never
          picture?: string
        }
        Relationships: []
      }
      post: {
        Row: {
          content: string
          create_at: string | null
          id: number
          isRoot: boolean
        }
        Insert: {
          content: string
          create_at?: string | null
          id?: never
          isRoot?: boolean
        }
        Update: {
          content?: string
          create_at?: string | null
          id?: never
          isRoot?: boolean
        }
        Relationships: []
      }
      post_and_picture: {
        Row: {
          picture_id: number
          post_id: number
        }
        Insert: {
          picture_id: number
          post_id: number
        }
        Update: {
          picture_id?: number
          post_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "post_and_picture_picture_id_fkey"
            columns: ["picture_id"]
            referencedRelation: "picture"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_and_picture_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          }
        ]
      }
      post_and_post: {
        Row: {
          child_post_id: number
          parent_post_id: number
        }
        Insert: {
          child_post_id: number
          parent_post_id: number
        }
        Update: {
          child_post_id?: number
          parent_post_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "post_and_post_child_post_id_fkey"
            columns: ["child_post_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_and_post_parent_post_id_fkey"
            columns: ["parent_post_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          }
        ]
      }
      topic: {
        Row: {
          id: number
          topic_description: string
          topic_title: string
        }
        Insert: {
          id?: never
          topic_description: string
          topic_title: string
        }
        Update: {
          id?: never
          topic_description?: string
          topic_title?: string
        }
        Relationships: []
      }
      type_def: {
        Row: {
          id: number
          type_name: string | null
        }
        Insert: {
          id?: never
          type_name?: string | null
        }
        Update: {
          id?: never
          type_name?: string | null
        }
        Relationships: []
      }
      users_and_posts: {
        Row: {
          post_id: number
          user_id: string
        }
        Insert: {
          post_id: number
          user_id: string
        }
        Update: {
          post_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_and_posts_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_and_posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_and_type_def: {
        Row: {
          type_id: number
          user_id: string
        }
        Insert: {
          type_id: number
          user_id: string
        }
        Update: {
          type_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_and_type_def_type_id_fkey"
            columns: ["type_id"]
            referencedRelation: "type_def"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_and_type_def_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_latest: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_list: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_the_post: {
        Args: {
          arg_id: number
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
