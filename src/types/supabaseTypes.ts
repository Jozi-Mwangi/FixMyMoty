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
      customers: {
        Row: {
          customer_id: string
          vehicle_registration: string | null
        }
        Insert: {
          customer_id: string
          vehicle_registration?: string | null
        }
        Update: {
          customer_id?: string
          vehicle_registration?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          }
        ]
      }
      jobs: {
        Row: {
          customer_id: string | null
          date_created: string | null
          job_id: string
          mechanic_id: string | null
          service_type: string | null
        }
        Insert: {
          customer_id?: string | null
          date_created?: string | null
          job_id: string
          mechanic_id?: string | null
          service_type?: string | null
        }
        Update: {
          customer_id?: string | null
          date_created?: string | null
          job_id?: string
          mechanic_id?: string | null
          service_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "jobs_mechanic_id_fkey"
            columns: ["mechanic_id"]
            isOneToOne: false
            referencedRelation: "mechanics"
            referencedColumns: ["mechanic_id"]
          }
        ]
      }
      mechanics: {
        Row: {
          availability: string | null
          location_of_operation: string | null
          mechanic_id: string
          rating: number | null
          skills: string | null
        }
        Insert: {
          availability?: string | null
          location_of_operation?: string | null
          mechanic_id: string
          rating?: number | null
          skills?: string | null
        }
        Update: {
          availability?: string | null
          location_of_operation?: string | null
          mechanic_id?: string
          rating?: number | null
          skills?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mechanics_mechanic_id_fkey"
            columns: ["mechanic_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          }
        ]
      }
      messages: {
        Row: {
          job_id: string | null
          message_content: string | null
          message_id: string
          receiver_id: string | null
          sender_id: string | null
          time_stamp: string | null
        }
        Insert: {
          job_id?: string | null
          message_content?: string | null
          message_id: string
          receiver_id?: string | null
          sender_id?: string | null
          time_stamp?: string | null
        }
        Update: {
          job_id?: string | null
          message_content?: string | null
          message_id?: string
          receiver_id?: string | null
          sender_id?: string | null
          time_stamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          }
        ]
      }
      payments: {
        Row: {
          amount: number | null
          job_id: string | null
          payee_id: string | null
          payer_id: string | null
          payment_id: string
          time_stamp: string | null
        }
        Insert: {
          amount?: number | null
          job_id?: string | null
          payee_id?: string | null
          payer_id?: string | null
          payment_id: string
          time_stamp?: string | null
        }
        Update: {
          amount?: number | null
          job_id?: string | null
          payee_id?: string | null
          payer_id?: string | null
          payment_id?: string
          time_stamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "payments_payee_id_fkey"
            columns: ["payee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "payments_payer_id_fkey"
            columns: ["payer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          }
        ]
      }
      profiles: {
        Row: {
          email: string | null
          full_name: string | null
          gender: string | null
          password: string | null
          phone_number: string | null
          profile_id: string
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          email?: string | null
          full_name?: string | null
          gender?: string | null
          password?: string | null
          phone_number?: string | null
          profile_id: string
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          email?: string | null
          full_name?: string | null
          gender?: string | null
          password?: string | null
          phone_number?: string | null
          profile_id?: string
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reviews: {
        Row: {
          job_id: string | null
          review_comment: string | null
          review_id: string
          review_rating: number | null
          reviewer_id: string | null
          time_stamp: string | null
        }
        Insert: {
          job_id?: string | null
          review_comment?: string | null
          review_id: string
          review_rating?: number | null
          reviewer_id?: string | null
          time_stamp?: string | null
        }
        Update: {
          job_id?: string | null
          review_comment?: string | null
          review_id?: string
          review_rating?: number | null
          reviewer_id?: string | null
          time_stamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          }
        ]
      }
      table_name: {
        Row: {
          data: Json | null
          inserted_at: string
          name: string | null
          profile_id: number
          updated_at: string
        }
        Insert: {
          data?: Json | null
          inserted_at?: string
          name?: string | null
          profile_id?: number
          updated_at?: string
        }
        Update: {
          data?: Json | null
          inserted_at?: string
          name?: string | null
          profile_id?: number
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
