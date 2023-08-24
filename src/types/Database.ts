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
      pic_to_pos: {
        Row: {
          pic_id: number
          pos_id: number
        }
        Insert: {
          pic_id: number
          pos_id: number
        }
        Update: {
          pic_id?: number
          pos_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "pic_to_pos_pos_id_fkey"
            columns: ["pos_id"]
            referencedRelation: "post"
            referencedColumns: ["id"]
          }
        ]
      }
      post: {
        Row: {
          child_id: number | null
          content: string
          created_at: string
          id: number
          is_childminder: boolean
          is_root: boolean
          parent_id: number | null
          title: string | null
        }
        Insert: {
          child_id?: number | null
          content: string
          created_at: string
          id?: never
          is_childminder?: boolean
          is_root?: boolean
          parent_id?: number | null
          title?: string | null
        }
        Update: {
          child_id?: number | null
          content?: string
          created_at?: string
          id?: never
          is_childminder?: boolean
          is_root?: boolean
          parent_id?: number | null
          title?: string | null
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
