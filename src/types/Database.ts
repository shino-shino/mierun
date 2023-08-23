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
          child_id: number
          content: string
          created_at: string
          id: number
          is_childminder: boolean
          is_root: boolean
          parent_id: number
        }
        Insert: {
          child_id?: number
          content: string
          created_at: string
          id?: never
          is_childminder?: boolean
          is_root?: boolean
          parent_id?: number
        }
        Update: {
          child_id?: number
          content?: string
          created_at?: string
          id?: never
          is_childminder?: boolean
          is_root?: boolean
          parent_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "post_child_id_fkey"
            columns: ["child_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_parent_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          }
        ]
      }
      topic: {
        Row: {
          id: number
          list_of_post: Json | null
          topic_description: string
          topic_title: string
        }
        Insert: {
          id?: never
          list_of_post?: Json | null
          topic_description: string
          topic_title: string
        }
        Update: {
          id?: never
          list_of_post?: Json | null
          topic_description?: string
          topic_title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_list: {
        Args: Record<PropertyKey, never>
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
