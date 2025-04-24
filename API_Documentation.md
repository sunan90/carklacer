# API Documentation

## GET /rekap
Retrieve rekap data for all users (Admin only).

### Headers
- `Authorization`: Bearer token (JWT)

### Response
- **200 OK**: Returns rekap data.
- **401 Unauthorized**: Missing or invalid token.
- **403 Forbidden**: User is not an admin.

### Example Response
```json
[
  {
    "nama": "John Doe",
    "minggu": [80, 90, 85, 70],
    "totalPercent": 81
  },
  {
    "nama": "Jane Smith",
    "minggu": [100, 95, 100, 100],
    "totalPercent": 99
  }
]
```
